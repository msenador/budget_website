import React from 'react';
import styled from 'styled-components';

const SignInSignOutPositioning = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
`;

const SignInSignOutStyling = styled.div`
  padding: 40px;
  border-radius: 50px;
  background-color: white;
  box-shadow: 5px 5px 13px 3px gray;
  width: 180px;
`;

const ErrorMessageStyles = styled.div`
  font-size: 10px;
  color: red;
`;

const PhraseStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

const InputStyles = styled.input`
  border-radius: 5px;
  border-shadow: 1px solid red;
`;

const ButtonStyles = styled.button`
  background: #1982C4;
  margin-top: 20px;
  margin-left:  50px;
`;

const FormHeaderStyles = styled.h1`
     border-bottom: 4px solid;
    -webkit-border-image: -webkit-linear-gradient(left, #ff2828, #F27B26);
`;

const SignInToggle = styled.div`
  color: #18FF6D
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
      <PhraseStyles>
          <div style={{ fontSize: '30px', textTransform: 'uppercase' }}>
            Your money under your control
          </div>
      </PhraseStyles>
      <SignInSignOutPositioning>
        <SignInSignOutStyling>
          <FormHeaderStyles>{hasAccount ? 'SIGN IN' : 'SIGN UP'}</FormHeaderStyles>
          <div>Email</div>
          <InputStyles type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <ErrorMessageStyles>{emailError ? `*${emailError}` : ''}</ErrorMessageStyles>
          <div>Password</div>
          <InputStyles type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <ErrorMessageStyles>{passwordError ? `*${passwordError}` : ''}</ErrorMessageStyles>
          {hasAccount ? (
            <>
              <ButtonStyles onClick={handleLogin}>Sign In</ButtonStyles>
              <p>
                Don't have an account?
                <SignInToggle onClick={() => setHasAccount(!hasAccount)}>Sign Up</SignInToggle>
              </p>
            </>
          ) : (
            <>
              <ButtonStyles onClick={handleSignUp}>Sign Up</ButtonStyles>
              <p>
                Have an account?
                <SignInToggle onClick={() => setHasAccount(!hasAccount)}>Sign In</SignInToggle>
              </p>
            </>
          )}
        </SignInSignOutStyling>
      </SignInSignOutPositioning>
    </>
  );
};

export default SignInOrSignUp;
