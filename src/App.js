import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import fire from './fire';
import SignInOrSignUp from './components/SignIn';
import HomePage from './components/HomePage';

const SignInPageStyles = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #20bf55;
  background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
`;

const App = () => {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
            setEmailError('Invalid Email');
            break;
          case 'auth/user-not-found':
            setEmailError('User not found');
            break;
          case 'auth/wrong-password':
            setPasswordError('Wrong password');
            break;
        }
      });
  };

  const handleToggle = () => {
    setHasAccount(!hasAccount)
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
            setEmailError(err.message);
            break;
          case 'auth/invalid-email':
            setEmailError('Invalid Email');
            break;
          case 'auth/weak-password':
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
        setUser('');
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
          <HomePage
          userId={userId}
          handleLogout={handleLogout}
          />
        ) : (
          <SignInPageStyles>
            <SignInOrSignUp
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
              handleToggle={handleToggle}
            />
          </SignInPageStyles>
        )}
      </div>
    </>
  );
};

export default App;
