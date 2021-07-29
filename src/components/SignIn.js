import React from 'react';
import styled from 'styled-components';

const SignInSignOutContainer = styled.div`
  display: flex;
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
      <SignInSignOutContainer>
        <label>Email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <p>{emailError}</p>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <p>{passwordError}</p>
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
      </SignInSignOutContainer>
    </>
  );
};

export default SignInOrSignUp;
