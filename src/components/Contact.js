import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Container = styled.div`
  height: 350px;
  background-color: #344966;
  display: grid;
  grid-template-columns: 3fr 1fr 7fr;
  justify-items: center;
  &.tablet {
    height: 400px;
  }
  &.phone {
    grid-template-columns: 3fr;
    row-gap: 50px;
    height: 700px;
  }
`;

const MissionStatementStyles = styled.div`
  font-size: 25px;
  color: white;
  width: 80%;
`;

const ContactUsStyles = styled.div`
  font-size: 25px;
  color: white;
  width: 80%;
  &.phone {
    margin-top: -305px;
  }
`;

const InputPositions = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const InputStyles = styled.input`
  width: 80%;
  border-radius: 5px;
  background: transparent;
  color: white;
  height: 20px;
`;

const TextAreaStyles = styled.textarea`
  width: 80%;
  resize: none;
  background: transparent;
  color: white;
  border-radius: 5px;
`;

const SendBtn = styled.button`
  width: 150px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #84bc9c;
  background-image: -webkit-linear-gradient(
      283deg,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 55%
    ),
    -webkit-linear-gradient(top, rgba(255, 255, 255, 0.15), transparent);
  color: white !important;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  text-decoration: none !important;
  -webkit-transition: all 0.2s linear;

  :active {
    top: 4px;
  }
`;

const MobileHRLine = styled.hr`
  -webkit-transform: rotate(90deg);
  height: 330px;
  margin-top: -250px;
`;

const Contact = () => {
  const mobilePhone = useMediaQuery({ query: "(max-width: 540px)" });
  const mobileTablet = useMediaQuery({
    query: "(min-width: 541px)",
  });
  const laptopOrDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });

  return (
    <Container
      className={
        laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
      }
    >
      <MissionStatementStyles>
        <h5 style={{ fontStyle: "italic" }}>OUR MISSION</h5>
        <div style={{ fontSize: "16px" }}>
          Our mission at BudgetStash is to provide the highest level of quality
          and support for preparation and implementation of budgetary decisions.
          Financial freedom isn't for the money, it is for the time you get
          back, to spend your days doing what you love. It starts here, at
          BudgetStash.
        </div>
        <div
          style={{
            fontStyle: "italic",
            fontSize: "12px",
            float: "right",
            marginTop: "10px",
          }}
        >
          - Morian Senador, BudgetStash CEO
        </div>
      </MissionStatementStyles>
      {mobilePhone ? <MobileHRLine /> : <hr />}
      <ContactUsStyles
        className={
          laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
        }
      >
        <h3 style={{ fontStyle: "italic", marginBottom: "0" }}>Contact Us</h3>
        <div style={{ fontSize: "10px", marginBottom: "20px" }}>
          i.e. partnerships, questions, general support
        </div>
        <InputPositions>
          <InputStyles placeholder="Name" />
          <InputStyles placeholder="Email" />
          <TextAreaStyles style={{ height: "100px" }} placeholder="Message" />
          <SendBtn>SEND</SendBtn>
        </InputPositions>
      </ContactUsStyles>
    </Container>
  );
};

export default Contact;
