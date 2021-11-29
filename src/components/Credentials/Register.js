import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Container = styled.div`
  height: 100vh;
  background-color: aliceblue;
  display: flex;
  justify-content: space-around;
`;

const CreateAccountContainer = styled.div`
  height: 500px;
  background-color: #1ac8ed;
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
      </CreateAccountContainer>
    </Container>
  );
};

export default Register;
