import React, { useEffect, useState } from "react";
import styled from "styled-components";
import fire from "./fire";
import SignInOrSignUp from "./components/SignIn";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import About from "./components/About";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import { Icon } from "@iconify/react";
import Login from "./components/Login";
import { useMediaQuery } from "react-responsive";

const Logo = styled.img`
  src: "budgetstashlogo.png";
`;

const NavbarLogo = styled.div`
  display: flex;
  width: 100%;
  margin-top: -50px;
`;

const NavbarLinks = styled.div`
  padding-top: 10px;
  height: 35px;
  display: flex;
  justify-content: space-around;
  background-color: #6e9075;
  width: 100%;
`;

const LinksStyles = styled(Link)`
  text-decoration: none;
  // color: #78c091; //lighter green color that i like.
  color: #fff;
  :hover {
    text-decoration: underline;
  }
`;

const App = () => {
  // const [user, setUser] = useState(false)
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" }); //EXAMPLES
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });  //EXAMPLES

  return (
    <Router>
      {isDesktopOrLaptop && <div>you or on destop</div>}
      {isBigScreen && <div>you are a big screen</div>}
      {isTabletOrMobile && <div>you are on mobile</div>}
      <NavbarLinks>
        <Switch>
          <Route>
            <LinksStyles to="contact" className="border">
              Contact Us
            </LinksStyles>
          </Route>
        </Switch>
        <Switch>
          <Route>
            <LinksStyles to="login">Log in</LinksStyles>
          </Route>
        </Switch>
      </NavbarLinks>
      <NavbarLogo>
        <Link to="/">
          <Logo src="logo.png" />
        </Link>
        <div
          style={{
            marginTop: "30px",
            margin: "auto",
            fontWeight: "900",
            fontFamily: "Josefin Sans, sans-serif",
          }}
        >
          “A budget doesn’t limit your freedom; it gives you freedom.” – Rachel
          Cruze
        </div>
      </NavbarLogo>

      <Route exact path="/">
        <HomePage />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/login">
        <Login />
      </Route>
    </Router>
  );
};

export default App;

// const SignInPageStyles = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background-color: #20bf55;
//   background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
//   overflow-y: auto;
// `;

// const App = () => {
//   const [userId, setUserId] = useState('');
//   const [user, setUser] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [hasAccount, setHasAccount] = useState(false);

//   const clearInputs = () => {
//     setEmail('');
//     setPassword('');
//   };

//   const clearErrors = () => {
//     setEmailError('');
//     setPasswordError('');
//   };

//   const handleLogin = () => {
//     clearErrors();
//     fire
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .catch((err) => {
//         switch (err.code) {
//           case 'auth/invalid-email':
//             setEmailError('Invalid Email');
//             break;
//           case 'auth/user-not-found':
//             setEmailError('User not found');
//             break;
//           case 'auth/wrong-password':
//             setPasswordError('Wrong password');
//             break;
//         }
//       });
//   };

//   const handleSignUp = () => {
//     clearErrors();
//     fire
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .catch((err) => {
//         switch (err.code) {
//           case 'auth/email-already-in-use':
//             setEmailError(err.message);
//             break;
//           case 'auth/invalid-email':
//             setEmailError('Invalid Email');
//             break;
//           case 'auth/weak-password':
//             setPasswordError(err.message);
//             break;
//         }
//       });
//   };

//   const handleLogout = () => {
//     fire.auth().signOut();
//   };

//   const authListener = () => {
//     fire.auth().onAuthStateChanged((user) => {
//       if (user) {
//         clearInputs();
//         setUserId(user.uid);
//         setUser(user);
//       } else {
//         setUser('');
//       }
//     });
//   };

//   useEffect(() => {
//     authListener();
//   }, []);

//   return (
//     <>
//       <div className="App">
//         {user ? (
//           <HomePage
//           userId={userId}
//           handleLogout={handleLogout}
//           />
//         ) : (
//           <SignInPageStyles>
//             <SignInOrSignUp
//               email={email}
//               setEmail={setEmail}
//               password={password}
//               setPassword={setPassword}
//               handleLogin={handleLogin}
//               handleSignUp={handleSignUp}
//               hasAccount={hasAccount}
//               setHasAccount={setHasAccount}
//               emailError={emailError}
//               passwordError={passwordError}
//             />
//           </SignInPageStyles>
//         )}
//       </div>
//     </>
//   );
// };

// export default App;
