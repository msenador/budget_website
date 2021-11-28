import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 1px 1px 13px 5px grey;
  height: 250px;
`;

const Security = () => {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!flip);
  };
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <Container style={{ backgroundColor: "aliceblue" }} key="front">
        <div>Security (FRONT)</div>
        <button onClick={handleFlip}>FLIP</button>
      </Container>

      <Container style={{ backgroundColor: "aliceblue" }} key="back">
        <div>BACK</div>
        <button onClick={handleFlip}>flip</button>
      </Container>
    </ReactCardFlip>
  );
};

export default Security;
