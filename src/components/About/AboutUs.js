import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Price from "./Price";
import Security from "./Security";
import Easy from "./Easy";

const SmallParagraph = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  padding: 0 200px;
  font-family: "Avenir Next";
  &.tablet {
    padding: 0 100px;
    margin-bottom: 20px;
  }
  &.phone {
    padding: 0 50px;
    margin-bottom: 20px;
  }
`;

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
  column-gap: 85px;
  padding: 0 50px;
  &.tablet {
    grid-template-columns: 3fr 3fr;
    row-gap: 50px;
  }
  &.phone {
    grid-template-columns: 3fr;
    row-gap: 50px;
  }
`;

const DonateBtnPositioning = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 35px;
`;

const DonateBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: #1ac8ed;
  border: none;
  cursor: pointer;
  box-shadow: 1px 1px 20px -1px grey;
`;

const AboutUs = () => {
  const mobileTablet = useMediaQuery({
    query: "(min-width: 541px)",
  });
  const laptopOrDesktop = useMediaQuery({
    query: "(min-width: 1025px)",
  });
  return (
    <>
      <Header
        className={
          laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
        }
      >
        What We Offer
      </Header>
      <SmallParagraph
        className={
          laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
        }
      >
        Our team believes in providing free and easy to use services to those
        who are taking steps to improve their financial stability. Our budgeting
        services are completely FREE! Donations are welcomed to help our team
        continue providing free budgeting services.
      </SmallParagraph>
      <div>
        <Content
          className={
            laptopOrDesktop ? "desktop" : mobileTablet ? "tablet" : "phone"
          }
        >
          <Price />
          <Security />
          <Easy />
        </Content>
        <DonateBtnPositioning>
          <DonateBtn>Donate Today!</DonateBtn>
        </DonateBtnPositioning>
      </div>
    </>
  );
};

export default AboutUs;
