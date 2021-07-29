import React from 'react';
import styled from 'styled-components';

const SignInSignOutPositioning = styled.div`
  padding-top: 150px;
  display: flex;
  justify-content: center;
`;

const SignInSignOutStyling = styled.div`
  padding: 40px;
  border-radius: 20px;
  background-color: azure;
  box-shadow: 5px 5px 13px -2px red;
  width: 220px;
`;

const ErrorMessageStyles = styled.div`
  font-size: 10px;
  color: red;
`;

const SignInOrSignUp = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <>
      <SignInSignOutPositioning>
      <SignInSignOutStyling>
        <div>Email</div>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <ErrorMessageStyles>{emailError ? '*' + emailError : ''}</ErrorMessageStyles>
        <div>Password</div>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <ErrorMessageStyles>{passwordError ? '*' + passwordError : ''}</ErrorMessageStyles>
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign In</button>
              <p>
                Don't have an account?
                <div onClick={() => setHasAccount(!hasAccount)}>Sign Up</div>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignUp}>Sign Up</button>
              <p>
                Have an account?
                <div onClick={() => setHasAccount(!hasAccount)}>Sign In</div>
              </p>
            </>
          )}
        </SignInSignOutStyling>
      </SignInSignOutPositioning>
    </>
  );
};

export default SignInOrSignUp;
