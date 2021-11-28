import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Container = styled.div``;

const Header = styled.h1`
  margin-top: 20px;
  font-size: 55px;
  font-weight: bold;
  align-items: center;
  display: flex;
  justify-content: center;
  &.phone {
    font-size: 30px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  text-align: center;
`;

const WhyUs = () => {
  const mobileTablet = useMediaQuery({
    query: "(min-width: 541px)",
  });
  const laptopOrDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });
  return (
    <Container>
      <Header
        className={
          laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
        }
      >
        What We Offer
      </Header>
      <div>
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
