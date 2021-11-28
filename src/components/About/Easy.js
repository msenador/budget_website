import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { FlipCardBtn, CardContainer } from "../../globalStyles";
import { Icon } from "@iconify/react";

const Easy = () => {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!flip);
  };
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <CardContainer style={{ backgroundColor: "aliceblue" }} key="front">
        <h1>User Friendly</h1>
        <Icon icon="lucide:mouse-pointer-click" fontSize="200px" />
        <FlipCardBtn onClick={handleFlip}>Learn more</FlipCardBtn>
      </CardContainer>

      <CardContainer style={{ backgroundColor: "aliceblue" }} key="back">
        <h3>Not tech savvy?</h3>
        <div style={{ fontFamily: "serif" }}>
          Don't worry! Our easy to use interface is user friendly on desktops,
          tablets, and mobile devices!
        </div>
        <FlipCardBtn onClick={handleFlip}>Back</FlipCardBtn>
      </CardContainer>
    </ReactCardFlip>
  );
};

export default Easy;
