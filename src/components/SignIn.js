import React from 'react';
import styled from 'styled-components';

const SignInSignOutPositioning = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
`;

const SignInSignOutStyling = styled.div`
  padding: 40px;
  border-radius: 100px;
  background-color: white;
  box-shadow: 5px 5px 13px -2px gray;
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
backgroundColor: background-color: #00b712;
background-image: linear-gradient(315deg, #00b712 0%, #5aff15 74%);
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
      <div >
      <div style={{ fontSize: '60px' }}>
          Your money.
        </div>
      <div style={{ fontSize: '72px' }}>
          Your control.
        </div>
        </div>
        </PhraseStyles>
      <SignInSignOutPositioning>
      <SignInSignOutStyling>
        <h1>{hasAccount ? 'SIGN IN' : 'SIGN UP'}</h1>
        <div>Email</div>
        <InputStyles type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <ErrorMessageStyles>{emailError ? '*' + emailError : ''}</ErrorMessageStyles>
        <div>Password</div>
        <InputStyles type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <ErrorMessageStyles>{passwordError ? '*' + passwordError : ''}</ErrorMessageStyles>
          {hasAccount ? (
            <>
              <ButtonStyles onClick={handleLogin}>Sign In</ButtonStyles>
              <p>
                Don't have an account?
                <div onClick={() => setHasAccount(!hasAccount)}>Sign Up</div>
              </p>
            </>
          ) : (
            <>
              <ButtonStyles onClick={handleSignUp}>Sign Up</ButtonStyles>
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
