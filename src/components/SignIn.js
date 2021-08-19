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
  font-size: 30px;
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

const SignInToggle = styled.button`
  cursor: pointer;
  color: #F19A3E;
  border: none;
  background: transparent;
  font-size: 15px;
`;

const SignInOrSignUp = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    setHasAccount,
    hasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <>
      <PhraseStyles>
        YOUR MONEY UNDER YOUR CONTROL.
      </PhraseStyles>

      <SignInSignOutPositioning>
        <SignInSignOutStyling>

          <FormHeaderLineGradient>
            <h1 name="signup-header" data-testid="signup-header" style={{ width: '180px', backgroundColor: 'white' }}>
              {hasAccount ? 'SIGN IN' : 'SIGN UP'}
            </h1>
          </FormHeaderLineGradient>

          <div style={{ paddingTop: '40px' }} />
          <EmailContainer>
            <div style={{ backgroundColor: 'white', paddingBottom: '3px' }}>
              <InputStyles data-testid="email-input" name="email-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </EmailContainer>
          <ErrorMessageStyles name="email-error" data-testid="email-error" >
            {emailError ? `*${emailError}` : null}
          </ErrorMessageStyles>

          <PasswordContainer />
          <EmailContainer>
            <div style={{ backgroundColor: 'white', paddingBottom: '3px' }}>
              <InputStyles data-testid="password-input" name="password-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
          </EmailContainer>
          <ErrorMessageStyles name="password-error" data-testid="password-error" >
            {passwordError ? `*${passwordError}` : null}
          </ErrorMessageStyles>

          {hasAccount ? (
            <>
              <ButtonStyles name="signin-button" data-testid="signin-button" onClick={handleLogin}>
                Sign In
              </ButtonStyles>
              <div>
                Don't have an account?
                <SignInToggle data-testid="signup-toggle" onClick={() => setHasAccount(!hasAccount)}>
                  Sign Up
                </SignInToggle>
              </div>
            </>
          ) : (
            <>
              <ButtonStyles data-testid="signup-button" name="signup-button" onClick={handleSignUp}>
                Sign Up
              </ButtonStyles>
              <div>
                Have an account?
              </div>

              <SignInToggle name="signin-toggle" data-testid="signin-toggle" onClick={() => setHasAccount(!hasAccount)}>
                Sign In
              </SignInToggle>
            </>
          )}
        </SignInSignOutStyling>
      </SignInSignOutPositioning>
    </>
  );
};

export default SignInOrSignUp;
