import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 300px;
  background-color: #344966;
  display: grid;
  grid-template-columns: 3fr 1fr 7fr;
  justify-items: center;
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
`;

const InputStyles = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const Contact = () => {
  return (
    <Container>
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
      <hr />
      <ContactUsStyles>
        <h3 style={{ fontStyle: "italic" }}>Contact Us</h3>
        <InputStyles>
          <input placeholder="Name" style={{ width: "80%" }} />
          <input placeholder="Email" style={{ width: "80%" }} />
          <textarea
            style={{ height: "100px", width: "80%", resize: "none" }}
            placeholder="Message"
          />
          <button style={{ width: "20%" }}>SEND</button>
        </InputStyles>
      </ContactUsStyles>
    </Container>
  );
};

export default Contact;
