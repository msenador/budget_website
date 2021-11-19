import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Header = styled.h1`
  margin-top: 20px;
  font-size: 55px;
  font-weight: bold;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  grid-gap: 25px 40px;
`;

const WhyUs = () => {
  return (
    <Container>
      <Header>What We Offer</Header>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Content>
          <div>Price (FREE) </div>
          <div>security.</div>
          <div> Easy to use.</div>
        </Content>
      </div>
    </Container>
  );
};

export default WhyUs;
