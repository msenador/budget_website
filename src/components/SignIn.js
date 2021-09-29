import React, { useState } from 'react';
import styled from 'styled-components';
import fire from '../fire';
import Modal from 'react-modal';

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
  margin-left: -6px;
`;

const ForgotPasswordButton = styled.button`
  cursor: pointer;
  color: #F19A3E;
  border: none;
  background: transparent;
  font-size: 15px;
  margin-left: -6px;
  margin-top: 2px;
`;

const ForgotPasswordOKButton = styled.button`
    cursor: pointer;
    height: 45px;
    background-color: #FFC43D;
    border: transparent;
    width: 185px;
    border-radius: 5px;
    margin-top: 25px;
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    border: 'none',
    padding: '100px'
  },
};

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

  const [modalIsOpen, setIsOpen] = useState(false);
  const [forgotPasswordMessage, setForgotPasswordMessage] = useState('');

  const handleSignUpEnterKey = (e) => {
    if (e.key === 'Enter'){
      handleSignUp();
    }
  }

  const handleLoginEnterKey = (e) => {
    if (e.key === 'Enter'){
      handleLogin();
    }
  }

  const handleForgotPassword = () => {
    fire.auth().sendPasswordResetEmail(email)
    .then(function() {
      setForgotPasswordMessage('CHECK YOUR EMAIL TO RESET YOUR PASSWORD');
    })
    .catch(function(err) {
      setForgotPasswordMessage('EMAIL INVALID OR NOT FOUND');
    });
  }

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const forgotPasswordOnClick = () => {
    handleForgotPassword();
    openModal();
  }

  return (
    <>
      <PhraseStyles>
        YOUR MONEY UNDER YOUR CONTROL.
      </PhraseStyles>

      <SignInSignOutPositioning>
        <SignInSignOutStyling>

          <FormHeaderLineGradient>
            <h1 name="signup-header" data-testid="signup-header" style={{ width: '180px', backgroundColor: 'white', textAlign: 'center' }}>
              {hasAccount ? 'SIGN IN' : 'SIGN UP'}
            </h1>
          </FormHeaderLineGradient>

          <div style={{ paddingTop: '40px' }} />
          <EmailContainer>
            <div style={{ backgroundColor: 'white', paddingBottom: '3px' }}>
              <InputStyles 
              data-testid="email-input" 
              name="email-input" 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}  
              onKeyDown={hasAccount ? handleLoginEnterKey : handleSignUpEnterKey}
              />
            </div>
          </EmailContainer>
          <ErrorMessageStyles name="email-error" data-testid="email-error" >
            {emailError ? `*${emailError}` : null}
          </ErrorMessageStyles>

          <PasswordContainer />
          <EmailContainer>
            <div style={{ backgroundColor: 'white', paddingBottom: '3px' }}>
              <InputStyles 
              data-testid="password-input" 
              name="password-input" 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              onKeyDown={hasAccount ? handleLoginEnterKey : handleSignUpEnterKey}
              />
            </div>
          </EmailContainer>
          <ErrorMessageStyles name="password-error" data-testid="password-error" >
            {passwordError ? `*${passwordError}` : null}
          </ErrorMessageStyles>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
            >
              <div style={{ textAlign: 'center' }}>
              <div>{forgotPasswordMessage}</div>
              <ForgotPasswordOKButton onClick={closeModal}>OK</ForgotPasswordOKButton>
              </div>
          </Modal>
          {hasAccount ? 
          <ForgotPasswordButton onClick={forgotPasswordOnClick}>
            Forgot password
          </ForgotPasswordButton> : <></>}

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
