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
        <Icon
          icon="lucide:mouse-pointer-click"
          style={{ fontSize: "200px", margin: "auto" }}
        />
        <FlipCardBtn onClick={handleFlip}>Learn more</FlipCardBtn>
      </CardContainer>

      <CardContainer style={{ backgroundColor: "aliceblue" }} key="back">
        <h2>Not tech savvy?</h2>
        <div style={{ fontFamily: "Avenir Next" }}>
          Don't worry! Our easy to use interface is user friendly on desktops,
          tablets, and mobile devices!
        </div>
        <FlipCardBtn onClick={handleFlip}>Back</FlipCardBtn>
      </CardContainer>
    </ReactCardFlip>
  );
};

export default Easy;
