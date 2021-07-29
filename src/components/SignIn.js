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
`;

const EmailPasswordCOntainer = styled.div`
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
      <EmailPasswordCOntainer>
        <div>Email</div>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <p>{emailError}</p>
        <div>Password</div>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <p>{passwordError}</p>
        </EmailPasswordCOntainer>
        <div>
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign In</button>
              <p>
                Don't have an account?
                {' '}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignUp}>Sign Up</button>
              <p>
                Have an account?
                {' '}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
              </p>
            </>
          )}
        </div>
        </SignInSignOutStyling>
      </SignInSignOutPositioning>
    </>
  );
};

export default SignInOrSignUp;
