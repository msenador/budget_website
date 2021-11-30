import React from "react";
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

const ForgotPasswordPosition = styled.div`
  margin-top: -30px;
  width: 80%;
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

const Login = () => {
  const mobileTablet = useMediaQuery({
    query: "(min-width: 541px)",
  });
  const laptopOrDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });

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
          <InputStyles placeholder="Email" />
          <InputStyles placeholder="Password" />
          <ForgotPasswordPosition>
            <ForgotPasswordStyles>Forgot password</ForgotPasswordStyles>
          </ForgotPasswordPosition>
          <LoginBtn>LOG IN</LoginBtn>
          <div style={{ padding: "0 30px" }}>
            Don't have an account? <Link to="/register">Register</Link>
          </div>
        </InputContainer>
      </CreateAccountContainer>
    </Container>
  );
};

export default Login;
