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

const Register = () => {
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
        <h1 style={{ textAlign: "center", color: "white" }}>Create Account</h1>
        <InputContainer
          className={
            laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
          }
        >
          <InputStyles placeholder="First Name" />
          <InputStyles placeholder="Email" />
          <InputStyles placeholder="Password" />
          <InputStyles placeholder="Confirm Password" />
          <RegisterBtn>REGISTER</RegisterBtn>
          <div style={{ padding: "0 30px" }}>
            Already have an account? <Link to="/login">Log in</Link>
          </div>
        </InputContainer>
      </CreateAccountContainer>
    </Container>
  );
};

export default Register;
