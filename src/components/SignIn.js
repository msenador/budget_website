import React, { useEffect } from 'react';
import styled from 'styled-components';
import fire from '../fire';

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
  border: transparent;
  :focus {
    border: transparent;
  }
`;

const ButtonStyles = styled.button`
    cursor: pointer;
    height: 45px;
    background-color: #20bf55;
    background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
    margin-top: 40px;
    margin-left: 45px;
    margin-bottom: 20px;
    border: transparent;
    width: 90px;
    border-radius: 100px;
`;

const FormHeaderLineGradient = styled.div`
  background-color: #20bf55;
  background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
  height: 42px;
`;

const EmailContainer = styled.div`
  background-color: #20bf55;
  background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
  width: 180px;
  padding-bottom: 4px;
`;

const PasswordContainer = styled.div`
  margin-top: 23px;
`;

const SignInToggle = styled.div`
  cursor: pointer;
  color: #F19A3E;
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

  // const resetPassword = (email) => {
  //   console.log(`EMAIL: ${email}`)
  //   console.log('HIT')
  //   fire.auth().sendPasswordResetEmail(email)
  //   .then(() => {
  //     alert('Please check your email to reset your password')
  //   }).catch((err) => {
  //     alert('Try again.')
  //   })
  // }

  // useEffect(() => {
  //   console.log(`INPUT: ${email}`)
  //   setEmail(email)
  // },[email])

  return (
    <>
      <PhraseStyles>
        <div style={{ fontSize: '30px', textTransform: 'uppercase' }}>
          Your money under your control
        </div>
      </PhraseStyles>

      <SignInSignOutPositioning>
        <SignInSignOutStyling>

          <FormHeaderLineGradient><h1 data-testid="header-signup" style={{ width: '180px', backgroundColor: 'white' }}>{hasAccount ? 'SIGN IN' : 'SIGN UP'}</h1></FormHeaderLineGradient>

          <div style={{ paddingTop: '40px' }} />
          <EmailContainer><div style={{ backgroundColor: 'white', paddingBottom: '3px' }}><InputStyles data-testid="input-email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div></EmailContainer>
          <ErrorMessageStyles>{emailError ? `*${emailError}` : null}</ErrorMessageStyles>

          <PasswordContainer />
          <EmailContainer><div style={{ backgroundColor: 'white', paddingBottom: '3px' }}><InputStyles data-testid="input-password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /></div></EmailContainer>
          <ErrorMessageStyles>{passwordError ? `*${passwordError}` : null}</ErrorMessageStyles>
          {/* {hasAccount ? (
            <button onClick={resetPassword}>Forgot Password</button>
          ) : (
            <></>
          )} */}

          {hasAccount ? (
            <>
              <ButtonStyles data-testid="signin-button" onClick={handleLogin}>Sign In</ButtonStyles>
              <div>
                Don't have an account?
                <SignInToggle data-testid="signup-toggle" onClick={() => setHasAccount(!hasAccount)}>Sign Up</SignInToggle>
              </div>
            </>
          ) : (
            <>
              <ButtonStyles data-testid="signinup-button" onClick={handleSignUp}>Sign Up</ButtonStyles>
              <div>
                Have an account?
              </div>

                <SignInToggle data-testid="signin-toggle" onClick={() => setHasAccount(!hasAccount)}>Sign In</SignInToggle>
            </>
          )}
        </SignInSignOutStyling>
      </SignInSignOutPositioning>
    </>
  );
};

export default SignInOrSignUp;
