import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 1px 1px 20px -1px grey;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 30px 30px;
`;

const FlipCardBtn = styled.button`
  border: none;
  text-decoration: underline;
  background-color: transparent;
  cursor: pointer;
  color: blue;
`;

const Price = () => {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!flip);
  };

  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <Container style={{ backgroundColor: "aliceblue" }} key="front">
        <h2>Free of charge!</h2>
        <div>
          <Icon icon="dashicons:money-alt" fontSize="150px" />
        </div>
        <FlipCardBtn onClick={handleFlip}>Learn more</FlipCardBtn>
      </Container>

      <Container style={{ backgroundColor: "aliceblue" }} key="back">
        <h3>Our services are completely FREE!</h3>
        <div>
          Nobody should have to spend money on a budgeting service. However,
          donations are always welcomed to help keep our budgeting services free
          of charge!
        </div>
        <FlipCardBtn onClick={handleFlip}>Back</FlipCardBtn>
      </Container>
    </ReactCardFlip>
  );
};

export default Price;
