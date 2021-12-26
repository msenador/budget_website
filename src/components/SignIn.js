import React, { useState } from "react";
import styled from "styled-components";
import fire from "../fire";
import Modal from "react-modal";
import Contact from "./Contact";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Button } from "../globalStyles";
import AboutUs from "./About/AboutUs";

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
  margin-top: -50px;
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
  &.desktop {
    height: 600px;
  }

  &.tablet {
    height: 500px;
  }

  &.phone {
    height: 300px;
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
  // height: 150px;
  // background-color: #087e8b;
  padding-bottom: 20px;
`;

// const RegisterContainer = styled.div`
//   height: 100vh;
//   background-size: cover;
//   display: flex;
//   justify-content: space-around;
//   background-image: url("./createAccount.png");
// `;

const CreateAccountContainer = styled.div`
  height: 480px;
  background-color: #84bc9c;
  margin: auto;
  box-shadow: 1px 1px 20px -1px grey;
  width: 100% &.desktop {

  }
  &.tablet {
  }
  &.phone {
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

const ErrMessagePosition = styled.div`
  margin-top: -30px;
  width: 80%;
  font-size: 12px;
  color: red;
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
    emailError,
    passwordError,
    handleLogout,
    firstName,
    setFirstName,
    confirmPassword,
    setConfirmPassword,
  } = props;

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
        setForgotPasswordMessage("CHECK YOUR EMAIL TO RESET YOUR PASSWORD");
        openModal();
      })
      .catch(function (err) {
        setForgotPasswordMessage("EMAIL INVALID OR NOT FOUND");
        openModal();
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

  return (
    <>
      <Router>
        <NavbarLinks>
          <Switch>
            <Route>
              <LinkStyles to="/contactus">Contact Us</LinkStyles>
            </Route>
          </Switch>
          <Switch>
            <Route>
              {user ? (
                <LinkStyles onClick={handleLogout}>Log out</LinkStyles>
              ) : (
                <LinkStyles to="/">Log in</LinkStyles>
              )}
            </Route>
          </Switch>
        </NavbarLinks>
        <NavbarLogo>
          <Link to={user ? "/user-in" : "/"}>
            <Logo
              data-testid="home-logo"
              className={
                laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
              }
              src="logo3.png"
            />
          </Link>
          <div>
            <QuotesStyles
              data-testid="quotes"
              className={
                laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
              }
            >
              <p>
                “A budget doesn’t limit your freedom; it gives you freedom.”
              </p>
              <QuoteAuthor
                className={
                  laptopOrDesktop
                    ? "desktop"
                    : mobileTablet
                    ? "tablet"
                    : "phone"
                }
              >
                – Rachel Cruze
              </QuoteAuthor>
            </QuotesStyles>
          </div>
        </NavbarLogo>

        <CreateAccountContainer
          className={
            laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
          }
        >
          <h1
            style={{ paddingTop: "20px", textAlign: "center", color: "black" }}
          >
            Start Today!
          </h1>

          <InputContainer
            className={
              laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
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

            <div
              style={{
                padding: "0 30px",
                marginTop: firstNameErr
                  ? "-10px"
                  : emailErr
                  ? "-10px"
                  : passwordErr
                  ? "-10px"
                  : confirmPasswordErr
                  ? "-10px"
                  : "0",
              }}
            >
              Already have an account? <Link to="/login">Log in</Link>
            </div>
          </InputContainer>
        </CreateAccountContainer>

        <HomeVideo
          className={
            laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
          }
          data-testid="main-video"
          loop
          src="./lightBulbHand.mp4"
          autoPlay
          muted
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
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            <RegisterBtnPosition
              className={
                laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
              }
            >
              <SignupButton
                className={
                  laptopOrDesktop
                    ? "desktop"
                    : mobileTablet
                    ? "tablet"
                    : "phone"
                }
              >
                Register Now!
              </SignupButton>
            </RegisterBtnPosition>
          </Link>
        </Container>
        <AboutUsContainer
          className={
            laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
          }
        >
          <AboutUs />
        </AboutUsContainer>
        <FooterContainer />

        <Route path="/contactus">
          <Contact />
        </Route>
      </Router>
    </>
  );
};

export default SignInOrSignUp;
