import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { FlipCardBtn, CardContainer } from "../../globalStyles";
import { Icon } from "@iconify/react";

const Security = () => {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!flip);
  };
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <CardContainer style={{ backgroundColor: "aliceblue" }} key="front">
        <h1>Guaranteed Security</h1>
        <Icon
          icon="bi:shield-lock"
          style={{ fontSize: "200px", margin: "auto" }}
        />
        <FlipCardBtn onClick={handleFlip}>Learn more</FlipCardBtn>
      </CardContainer>

      <CardContainer style={{ backgroundColor: "aliceblue" }} key="back">
        <h2>Secured by Google's realtime database</h2>
        <div style={{ fontFamily: "Avenir Next" }}>
          We offer the best data security to our clients by utilizing Google's
          realtime database to store data.
        </div>
        <FlipCardBtn onClick={handleFlip}>Back</FlipCardBtn>
      </CardContainer>
    </ReactCardFlip>
  );
};

export default Security;
