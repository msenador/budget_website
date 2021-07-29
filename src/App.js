import React, {useEffect, useState} from 'react';
import fire from './fire';
import SignIn from './components/SignIn';
import HomePage from './components/HomePage';

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    })
  }

  const handleSignUp = () => {
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    })
  }

  const handleLogout = () => {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    })
  }

  useEffect(() => {
    authListener();
  }, [])



  return(
    <>
    <div className="App">
    {user ? (
      <HomePage
        handleLogout={handleLogout}
        user={user}
      />
    ) : (
      <SignIn 
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
      handleSignUp={handleSignUp}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
      />
    )}
    </div>
    </>
  )
}

export default App;

// import firebase from "firebase/app";
// import React, {useEffect, useState} from 'react';
// import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
// import SignIn from "../../budget_website/src/components/SignIn";
// import Register from "../../budget_website/src/components/Register";
// import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';


// function App() {
//   const [user, setUser] = useState(null);

//   const updateUser = (email) => {
//     setUser(email);
//   }

//   useEffect(() => {
//     firebase.auth().onAuthStateChanged((user) => {
//       console.log(user)
//       if (user) {
//         setUser(user);
//       } else { 
//         setUser(null);
//       }
//     });
//   })


//   return (
//       <>
//       <div>
//         {console.log(user)}
//       </div>
//         <BrowserRouter>
//           <Switch>
//             <Route exact path={'/'}>
//               {!user && <Redirect to={'/register'}/>}
//               <div>
//                 <Link to={user ? `/userid-${user}` : '/register'}><MonetizationOnOutlinedIcon/></Link>
//                 <Link to={'/sign-in'}>Sign In</Link>
//                 <Link to={'/register'}>Register</Link>
//               </div>
//             </Route>

//             <Route path={'/sign-in'}>
//               <SignIn user={user} updateUser={updateUser}/>
//             </Route>
//             <Route path={'/register'}>
//               <Register user={user}/>
//             </Route>
//           </Switch>
//         </BrowserRouter>
//       </>
//   );
// }

// export default App;