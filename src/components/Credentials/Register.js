import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import fire from "../../fire";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  background-image: url("./createAccount.png");
`;

const CreateAccountContainer = styled.div`
  height: 480px;
  background-color: #84bc9c;
  border-radius: 20px;
  margin: auto;
  box-shadow: 1px 1px 20px -1px grey;
  &.desktop {
    width: 60%;
  }
  &.tablet {
    width: 80%;
  }
  &.phone {
    width: 70%;
  }
`;

const InputStyles = styled.input`
  border-radius: 5px;
  border: none;
  width: 80%;
  height: 30px;
`;

const InputContainer = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 3fr;
  justify-items: center;
  grid-row-gap: 30px;
  &.phone {
    margin-top: 40px;
  }
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

const Register = (props) => {
  const [user, setUser] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameErr, setFirstNameErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");
  const mobileTablet = useMediaQuery({
    query: "(min-width: 541px)",
  });
  const laptopOrDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });

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

  const passwordsMatch = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setConfirmPasswordErr("*Passwords do not match");
      return false;
    } else {
      return true;
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

  const handleRegisterEnterKey = (e) => {
    if (e.key === "Enter") {
      handleRegister();
    }
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        clearErrors();
        setUser(firstName);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <Container>
      <CreateAccountContainer
        className={
          laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
        }
      >
        <h1 style={{ textAlign: "center", color: "white" }}>Create Account</h1>
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
    </Container>
  );
};

export default Register;
