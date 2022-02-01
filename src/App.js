import React, { useEffect, useState } from "react";
import { fire } from "./fire";
import SignInOrSignUp from "./components/SignIn";
import HomePage from "./components/HomePage";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailLoginError, setEmailLoginError] = useState("");
  const [passwordLoginError, setPasswordLoginError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const mobileTablet = useMediaQuery({
    query: "(min-width: 541px)",
  });
  const laptopOrDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const clearLoginErrors = () => {
    setEmailLoginError("");
    setPasswordLoginError("");
  };

  const handleLogin = () => {
    clearLoginErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
            setEmailLoginError("Invalid Email");
            break;
          case "auth/user-not-found":
            setEmailLoginError("User not found");
            break;
          case "auth/wrong-password":
            setPasswordLoginError("Wrong password");
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
            setEmailError(err.message);
            break;
          case "auth/invalid-email":
            setEmailError("Invalid Email");
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUserId(user.uid);
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <>
      <div className="App">
        {user ? (
          <HomePage userId={userId} handleLogout={handleLogout} />
        ) : (
          <SignInOrSignUp
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            firstName={firstName}
            setFirstName={setFirstName}
            handleLogout={handleLogout}
            user={user}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailLoginError={emailLoginError}
            passwordLoginError={passwordLoginError}
            setEmailLoginError={setEmailLoginError}
            setPasswordLoginError={setPasswordLoginError}
          />
        )}
      </div>
    </>
  );
};

export default App;
