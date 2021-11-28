import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
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
        <h1>Free to use</h1>
        <div>
          <Icon
            icon="dashicons:money-alt"
            style={{ fontSize: "200px", margin: "auto" }}
          />
        </div>
        <FlipCardBtn onClick={handleFlip}>Learn more</FlipCardBtn>
      </CardContainer>

      <CardContainer style={{ backgroundColor: "aliceblue" }} key="back">
        <h3>Our services are completely FREE!</h3>
        <div style={{ fontFamily: "serif" }}>
          You should be saving money, not spending it! However, donations are
          always welcomed to help keep our budgeting services free of charge!
        </div>
        <FlipCardBtn onClick={handleFlip}>Back</FlipCardBtn>
      </CardContainer>
    </ReactCardFlip>
  );
};

export default Price;
