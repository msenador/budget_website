import React, { useEffect, useState } from "react";
import styled from "styled-components";
import fire from "../fire";
import Modal from "react-modal";
import Contact from "./Contact";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Button, CardContainer } from "../globalStyles";
import AboutUs from "./About/AboutUs";
import ReactCardFlip from "react-card-flip";
import { FlipCardBtn } from "../globalStyles";
import * as Scroll from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import quotes from "./Quotes.json";
import { Icon } from "@iconify/react";

const NavbarLinks = styled.div`
  padding-top: 10px;
  height: 35px;
  display: flex;
  justify-content: space-around;
  background-color: #344966;
  width: 100%;
`;

const LinkStyles = styled(Link)`
  z-index: 99;
  text-decoration: none;
  color: #fff;
  :hover {
    text-decoration: underline;
  }
`;

const NavbarLogo = styled.div`
  display: flex;
  width: 100%;
  margin-top: -30px;
  height: 125px;
  justify-content: space-around;
`;

const Logo = styled.img`
  &.desktop {
    width: 300px;
    padding-left: 100px;
    margin-top: 53px;
  }
  &.tablet {
    width: 185px;
    padding-left: 45px;
    margin-top: 65px;
  }
  &.phone {
    width: 185px;
    padding-left: 5px;
    margin-top: 65px;
  }
`;

const QuotesStyles = styled.div`
  font-family: "Avenir Next";
  padding-right: 10px;
  padding-left: 15px;
  &.desktop {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
  }
  &.tablet {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
  }
  &.phone {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    font-size: 12px;
  }
`;

const QuoteAuthor = styled.p`
  font-size: 15px;
  float: right;
  font-family: "Avenir Next";
  &.desktop {
    padding-right: 25px;
    margin-top: -10px;
  }
  &.tablet {
    padding-right: 25px;
    margin-top: -10px;
  }
  &.phone {
    padding-right: 25px;
    margin-top: -10px;
    font-size: 12px;
  }
`;

const HomeVideo = styled.video`
  object-fit: cover;
  width: 100%;
  position: sticky;
  z-index: -1;
  margin-top: 124px;
  box-shadow: 1px 1px 20px -1px grey;
  ${({ flip }) =>
    flip &&
    `
    margin-top: -8px;
  `}
  ${({ firstNameErr, emailErr, passwordErr, confirmPasswordErr }) =>
    (firstNameErr || emailErr || passwordErr || confirmPasswordErr) &&
    `
    margin-top: 139px;
  `}
  &.desktop {
    height: 600px;
    ${({ flip }) =>
      flip &&
      `
    margin-top: -8px;
  `}
    ${({ emailLoginError, passwordLoginError }) =>
      (emailLoginError || passwordLoginError) &&
      `
    margin-top: 22px;
  `}
  }

  &.tablet {
    ${({ flip }) =>
      flip &&
      `
    margin-top: 2px;
  `}
    height: 500px;
    ${({ emailLoginError, passwordLoginError }) =>
      (emailLoginError || passwordLoginError) &&
      `
    margin-top: 17px;
  `}
  }

  &.phone {
    margin-top: 131px;
    height: 300px;
    ${({ flip }) =>
      flip &&
      `
    margin-top: -23px;
  `}
    ${({ emailLoginError, passwordLoginError }) =>
      (emailLoginError || passwordLoginError) &&
      `
    margin-top: 38px;
  `}
  }
`;

const SignupButton = styled(Button)`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  &.desktop {
  }
  margin-top: -100px;
  margin-bottom: 70px;
  &.tablet {
    margin-left: 50px;
  }

  &.phone {
    font-size: 10px;
    height: 100px;
    width: 100px;
    border-radius: 100px;
    margin-left: 25px;
  }
`;

const RegisterBtnPosition = styled.div`
  width: 100%;
  text-align: center;
  &.desktop {
    margin-left: 30px;
  }
`;

const Container = styled.div`
  margin-top: -590px;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  &.tablet {
  }
  &.phone {
    margin-top: -325px;
    height: 325px;
    row-gap: 20px;
  }
`;

const Slogan = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  font-size: 35px;
  font-weight: bold;
  &.desktop {
    margin-top: -140px;
  }
  &.tablet {
  }
  &.phone {
    font-size: 15px;
  }
`;

const AboutUsContainer = styled.div`
  &.desktop {
    height: 700px;
  }
  &.tablet {
    height: 1100px;
  }
  &.phone {
    height: 1550px;
  }
`;

const FooterContainer = styled.div`
  background-color: #84bc9c;
  height: 20px;
  font-style: italic;
  display: flex;
  justify-content: space-around;
  color: white;
  padding: 20px;
`;

const CreateAccountContainer = styled.div`
  height: 480px;
  background-color: #84bc9c;
  box-shadow: 1px 1px 20px -1px grey;
  width: 100%;
  margin-top: 170px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  ${({ flip }) =>
    flip &&
    `
    margin-top: 0;
  `}
  &.desktop {
    ${({ flip }) =>
      flip &&
      `
    margin-top: 20px;
  `}
    ${({ emailLoginError, passwordLoginError }) =>
      (emailLoginError || passwordLoginError) &&
      `
    margin-top: 50px;
  `}
  }
  &.tablet {
    ${({ flip }) =>
      flip &&
      `
    margin-top: 40px;
  `}
  }
  &.phone {
    ${({ emailLoginError, passwordLoginError }) =>
      (emailLoginError || passwordLoginError) &&
      `
  margin-top: 60px;
`}
  }
`;

const InputStyles = styled.input`
  border-radius: 5px;
  border: none;
  width: 80%;
  height: 30px;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr;
  justify-items: center;
  grid-row-gap: 30px;
`;

const RegisterBtn = styled.button`
  border-radius: 10px;
  height: 40px;
  width: 30%;
  background-color: transparent;
  border: none;
  background-color: #067bc2;
  color: white;
  cursor: pointer;
`;

const LoginBtn = styled.button`
  border-radius: 10px;
  height: 40px;
  width: 30%;
  background-color: transparent;
  border: none;
  background-color: #067bc2;
  color: white;
  cursor: pointer;
`;

const ErrMessagePosition = styled.div`
  margin-top: -30px;
  width: 80%;
  font-size: 12px;
  color: red;
`;

const CarouselResponsive = styled(Carousel)`
  .control-dots {
    margin-bottom: 69px;
  }
  .control-arrow {
    :hover {
      background: transparent;
      pointer-events: none;
    }
  }
  .carousel-status {
    font-size: 0;
  }
  &.tablet {
    width: 350px;
    .control-dots {
      margin-bottom: 81px;
    }
  }
  &.phone {
    width: 160px;
    .control-dots {
      margin-bottom: 76px;
    }
  }
`;

const ForgotPasswordDiv = styled.div`
  width: 80%;
  margin-top: -30px;
`;
const ForgotPasswordBtn = styled.button`
  float: right;
  background: none;
  border: none;
  color: navajowhite;
  cursor: pointer;
  text-decoration: underline;
`;

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     borderRadius: '20px',
//     border: 'none',
//     padding: '100px'
//   },
// };

const SignInOrSignUp = (props) => {
  const {
    user,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    setHasAccount,
    hasAccount,
    emailLoginError,
    setEmailLoginError,
    passwordLoginError,
    setPasswordLoginError,
    handleLogout,
    firstName,
    setFirstName,
    confirmPassword,
    setConfirmPassword,
  } = props;

  const [flip, setFlip] = useState(false);
  const mobilePhone = useMediaQuery({ query: "(max-width: 540px)" });
  const mobileTablet = useMediaQuery({
    query: "(min-width: 541px)",
  });
  const laptopOrDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });

  const [firstNameErr, setFirstNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

  //   const [modalIsOpen, setIsOpen] = useState(false);
  //   const [forgotPasswordMessage, setForgotPasswordMessage] = useState('');

  const scrollTop = () => {
    if (flip === true) {
      setFlip(!flip);
    }
    scroll.scrollToTop();
  };

  const scrollBottom = () => {
    scroll.scrollToBottom();
  };

  const handleFlip = () => {
    setFlip(!flip);
  };

  const clearErrors = () => {
    setFirstNameErr("");
    setEmailErr("");
    setPasswordErr("");
    setConfirmPasswordErr("");
  };

  const clearInputs = () => {
    setFirstName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSignUpEnterKey = (e) => {
    if (e.key === "Enter") {
      handleSignUp();
    }
  };

  const handleLoginEnterKey = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const firstNameNull = (firstName) => {
    if (firstName === "") {
      setFirstNameErr("*First name is empty");
      return true;
    } else {
      false;
    }
  };

  const passwordsMatch = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setConfirmPasswordErr("*Passwords do not match");
      return false;
    } else {
      return true;
    }
  };

  const handleRegister = () => {
    clearErrors();
    if (firstNameNull(firstName) !== true) {
      if (passwordsMatch(password, confirmPassword) === true) {
        fire
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch((err) => {
            switch (err.code) {
              case "auth/email-already-in-use":
                setEmailErr("*" + err.message);
                break;
              case "auth/invalid-email":
                setEmailErr("*" + err.message);
                break;
              case "auth/weak-password":
                setPasswordErr("*" + err.message);
                break;
            }
          });
      }
    }
  };

  const handleForgotPassword = () => {
    fire
      .auth()
      .sendPasswordResetEmail(email)
      .then(function () {
        alert("CHECK YOUR EMAIL TO RESET YOUR PASSWORD");
      })
      .catch(function (err) {
        alert("EMAIL INVALID OR NOT FOUND");
      });
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleRegisterEnterKey = (e) => {
    if (e.key === "Enter") {
      handleRegister();
    }
  };

  const handleLoginLink = () => {
    if (flip === false) {
      setFlip(!flip);
    }
  };

  return (
    <>
      <Router>
        <NavbarLinks>
          <Switch>
            <Route>
              <LinkStyles onClick={scrollBottom}>Contact Us</LinkStyles>
            </Route>
          </Switch>
          <Switch>
            <Route>
              {user ? (
                <LinkStyles onClick={handleLogout}>Log out</LinkStyles>
              ) : (
                <LinkStyles onClick={handleLoginLink}>Log in</LinkStyles>
              )}
            </Route>
          </Switch>
        </NavbarLinks>
        <NavbarLogo>
          <Logo
            data-testid="home-logo"
            className={
              laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
            }
            src="logo3.png"
          />
          <div>
            <QuotesStyles
              data-testid="quotes"
              className={
                laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
              }
            >
              <CarouselResponsive
                autoPlay
                interval={3500}
                infiniteLoop
                className={
                  laptopOrDesktop
                    ? "desktop"
                    : mobileTablet
                    ? "tablet"
                    : "phone"
                }
              >
                {quotes &&
                  quotes.map((values) => {
                    return (
                      <div>
                        <p>{values.quote}</p>
                        <QuoteAuthor
                          className={
                            laptopOrDesktop
                              ? "desktop"
                              : mobileTablet
                              ? "tablet"
                              : "phone"
                          }
                        >
                          {values.author}
                        </QuoteAuthor>
                      </div>
                    );
                  })}
              </CarouselResponsive>
            </QuotesStyles>
          </div>
        </NavbarLogo>
        <ReactCardFlip isFlipped={flip} flipDirection="vertical">
          <CardContainer key="front" style={{ boxShadow: "none" }}>
            <CreateAccountContainer
              className={
                laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
              }
            >
              <h1
                style={{
                  paddingTop: "20px",
                  textAlign: "center",
                  color: "black",
                }}
              >
                Start Today!
              </h1>

              <InputContainer
                className={
                  laptopOrDesktop
                    ? "desktop"
                    : mobileTablet
                    ? "tablet"
                    : "phone"
                }
              >
                <InputStyles
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  onKeyDown={handleRegisterEnterKey}
                />

                {firstNameErr ? (
                  <ErrMessagePosition>{firstNameErr}</ErrMessagePosition>
                ) : (
                  <></>
                )}

                <InputStyles
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  onKeyDown={handleRegisterEnterKey}
                />

                {emailErr ? (
                  <ErrMessagePosition>{emailErr}</ErrMessagePosition>
                ) : (
                  <></>
                )}

                <InputStyles
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  onKeyDown={handleRegisterEnterKey}
                />

                {passwordErr ? (
                  <ErrMessagePosition>{passwordErr}</ErrMessagePosition>
                ) : (
                  <></>
                )}

                <InputStyles
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  onKeyDown={handleRegisterEnterKey}
                />

                {confirmPasswordErr ? (
                  <ErrMessagePosition>{confirmPasswordErr}</ErrMessagePosition>
                ) : (
                  <></>
                )}

                <RegisterBtn onClick={handleRegister}>REGISTER</RegisterBtn>

                <div>
                  Already have an account?
                  <FlipCardBtn onClick={handleFlip}>Log in</FlipCardBtn>
                </div>
              </InputContainer>
            </CreateAccountContainer>
          </CardContainer>

          <CardContainer key="back" style={{ boxShadow: "none" }}>
            <CreateAccountContainer
              flip={flip}
              emailLoginError={emailLoginError}
              passwordLoginError={passwordLoginError}
              className={
                laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
              }
            >
              <h1 style={{ textAlign: "center", color: "white" }}>Log in</h1>
              <InputContainer
                className={
                  laptopOrDesktop
                    ? "desktop"
                    : mobileTablet
                    ? "tablet"
                    : "phone"
                }
              >
                <InputStyles
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  onKeyDown={handleLoginEnterKey}
                />

                {emailLoginError ? (
                  <ErrMessagePosition>{emailLoginError}</ErrMessagePosition>
                ) : (
                  <></>
                )}

                <InputStyles
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  onKeyDown={handleLoginEnterKey}
                />

                <ForgotPasswordDiv>
                  <ForgotPasswordBtn onClick={handleForgotPassword}>
                    Forgot Password
                  </ForgotPasswordBtn>
                </ForgotPasswordDiv>

                {passwordLoginError ? (
                  <ErrMessagePosition style={{ marginTop: "-60px" }}>
                    {passwordLoginError}
                  </ErrMessagePosition>
                ) : (
                  <></>
                )}

                <LoginBtn onClick={handleLogin}>LOG IN</LoginBtn>
                <div
                  style={{
                    padding: "0 30px",
                    marginTop: mobileTablet ? "0" : "-10px",
                  }}
                >
                  Don't have an account?
                  <FlipCardBtn onClick={handleFlip}>Register</FlipCardBtn>
                </div>
              </InputContainer>
            </CreateAccountContainer>
          </CardContainer>
        </ReactCardFlip>

        <HomeVideo
          className={
            laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
          }
          firstNameErr={firstNameErr}
          emailErr={emailErr}
          passwordErr={passwordErr}
          confirmPasswordErr={confirmPasswordErr}
          flip={flip}
          emailLoginError={emailLoginError}
          passwordLoginError={passwordLoginError}
          data-testid="main-video"
          loop
          src="./lightBulbHand.mp4"
          autoPlay
        />
        <Container
          className={
            laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
          }
        >
          <Slogan
            data-testid="slogan"
            className={
              laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
            }
          >
            <div>Be confident.</div>
            <div>Be free.</div>
            <div>Be ready.</div>
          </Slogan>
          <RegisterBtnPosition
            className={
              laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
            }
            style={{ textDecoration: "none", color: "black" }}
          >
            <SignupButton
              onClick={scrollTop}
              className={
                laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
              }
            >
              Register Now!
            </SignupButton>
          </RegisterBtnPosition>
        </Container>
        <AboutUsContainer
          className={
            laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
          }
        >
          <AboutUs />
        </AboutUsContainer>
        <Contact />
        <FooterContainer>
          <div>
            BudgetStash{" "}
            <span>
              <Icon icon="charm:copyright" color="white" />
            </span>{" "}
            2022
          </div>
        </FooterContainer>
      </Router>
    </>
  );
};

export default SignInOrSignUp;
