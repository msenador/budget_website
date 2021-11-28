import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styled from "styled-components";
import { FlipCardBtn, CardContainer } from "../../globalStyles";

const Easy = () => {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!flip);
  };
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <CardContainer style={{ backgroundColor: "aliceblue" }} key="front">
        <div>Easy (FRONT)</div>
        <FlipCardBtn onClick={handleFlip}>Learn more</FlipCardBtn>
      </CardContainer>

      <CardContainer style={{ backgroundColor: "aliceblue" }} key="back">
        <div>BACK</div>
        <FlipCardBtn onClick={handleFlip}>Back</FlipCardBtn>
      </CardContainer>
    </ReactCardFlip>
  );
};

export default Easy;
