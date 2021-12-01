import React, { useEffect, useState } from "react";
import styled from "styled-components";
import fire from "./fire";
import SignInOrSignUp from "./components/SignIn";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import Login from "./components/Credentials/Login";
import Register from "./components/Credentials/Register";
import { useMediaQuery } from "react-responsive";
import HomeUserIn from "./components/HomeUserIn/HomeUserIn";

const Logo = styled.img`
  &.desktop {
    width: 300px;
    padding-left: 100px;
    margin-top: 53px;
  }
  &.tablet {
    width: 185px;
    padding-left: 45px;
    margin-top: 65px;
  }
  &.phone {
    width: 185px;
    padding-left: 5px;
    margin-top: 65px;
  }
`;

const NavbarLogo = styled.div`
  display: flex;
  width: 100%;
  margin-top: -50px;
  height: 125px;
  justify-content: space-around;
`;

const NavbarLinks = styled.div`
  padding-top: 10px;
  height: 35px;
  display: flex;
  justify-content: space-around;
  background-color: #344966;
  width: 100%;
`;

const LinksStyles = styled(Link)`
  z-index: 99;
  text-decoration: none;
  color: #fff;
  :hover {
    text-decoration: underline;
  }
`;

const QuotesStyles = styled.div`
  font-family: "Avenir Next";
  padding-right: 10px;
  padding-left: 15px;
  &.desktop {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
  }
  &.tablet {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
  }
  &.phone {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    font-size: 12px;
  }
`;

const QuoteAuthor = styled.p`
  font-size: 15px;
  float: right;
  font-family: "Avenir Next";
  &.desktop {
    padding-right: 25px;
    margin-top: -10px;
  }
  &.tablet {
    padding-right: 25px;
    margin-top: -10px;
  }
  &.phone {
    padding-right: 25px;
    margin-top: -10px;
    font-size: 12px;
  }
`;

const App = () => {
  const mobilePhone = useMediaQuery({ query: "(max-width: 540px)" });
  const mobileTablet = useMediaQuery({
    query: "(min-width: 541px)",
  });
  const laptopOrDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });
  const [user, setUser] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Router>
      {/* {laptopOrDesktop && <div>you or on destop</div>}
      {mobilePhone && <div>you are a mobile phone</div>}
      {mobileTablet && <div>you are on tablet</div>} */}
      <NavbarLinks>
        <Switch>
          <Route>
            <LinksStyles
              data-testid="contact-us-link"
              id="contact-us-link"
              to="contact"
              className="border"
            >
              Contact Us
            </LinksStyles>
          </Route>
        </Switch>
        <Switch>
          <Route>
            <LinksStyles id="login-link" data-testid="login-link" to="login">
              Log in
            </LinksStyles>
          </Route>
        </Switch>
      </NavbarLinks>
      <NavbarLogo>
        <Link to={user ? "/user-in" : "/"}>
          <Logo
            data-testid="home-logo"
            className={
              laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
            }
            src="logo3.png"
          />
        </Link>
        <div>
          <QuotesStyles
            data-testid="quotes"
            className={
              laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
            }
          >
            <p>“A budget doesn’t limit your freedom; it gives you freedom.”</p>
            <QuoteAuthor
              className={
                laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
              }
            >
              – Rachel Cruze
            </QuoteAuthor>
          </QuotesStyles>
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

      <Route path="/register">
        <Register />
      </Route>

      <Route path="/user-in">
        <HomeUserIn />
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
