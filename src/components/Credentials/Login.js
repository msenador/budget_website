import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { fire } from "../../fire";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  background-image: url("./createAccount.png");
`;

const CreateAccountContainer = styled.div`
  height: 380px;
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

const ForgotPasswordStyles = styled.button`
  background-color: transparent;
  border: none;
  color: blue;
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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const mobileTablet = useMediaQuery({
    query: "(min-width: 541px)",
  });
  const laptopOrDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });

  const handleLoginEnterKey = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  const handleLogin = () => {
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
  };

  return (
    <Container>
      <CreateAccountContainer
        className={
          laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
        }
      >
        <h1 style={{ textAlign: "center", color: "white" }}>Log in</h1>
        <InputContainer
          className={
            laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
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
            onKeyDown={handleLoginEnterKey}
          />

          {passwordErr ? (
            <ErrMessagePosition>{passwordErr}</ErrMessagePosition>
          ) : (
            <></>
          )}

          <ForgotPasswordStyles>Forgot password?</ForgotPasswordStyles>
          <LoginBtn onClick={handleLogin}>LOG IN</LoginBtn>
          <div
            style={{
              padding: "0 30px",
              marginTop: mobileTablet ? "0" : "-10px",
            }}
          >
            Don't have an account? <Link to="/register">Register</Link>
          </div>
        </InputContainer>
      </CreateAccountContainer>
    </Container>
  );
};

export default Login;
