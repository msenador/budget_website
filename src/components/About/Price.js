import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { FlipCardBtn, CardContainer } from "../../globalStyles";

const Price = () => {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!flip);
  };

  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <CardContainer style={{ backgroundColor: "aliceblue" }} key="front">
        <h2>Free to use!</h2>
        <div>
          <Icon icon="dashicons:money-alt" fontSize="150px" />
        </div>
        <FlipCardBtn onClick={handleFlip}>Learn more</FlipCardBtn>
      </CardContainer>

      <CardContainer style={{ backgroundColor: "aliceblue" }} key="back">
        <h3>Our services are completely FREE!</h3>
        <div>
          Nobody should have to spend money on a budgeting service. However,
          donations are always welcomed to help keep our budgeting services free
          of charge!
        </div>
        <FlipCardBtn onClick={handleFlip}>Back</FlipCardBtn>
      </CardContainer>
    </ReactCardFlip>
  );
};

export default Price;
