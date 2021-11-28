import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 1px 1px 20px -1px grey;
  height: 250px;
`;

const Easy = () => {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!flip);
  };
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <Container style={{ backgroundColor: "aliceblue" }} key="front">
        <div>Easy (FRONT)</div>
        <button onClick={handleFlip}>Learn more</button>
      </Container>

      <Container style={{ backgroundColor: "aliceblue" }} key="back">
        <div>BACK</div>
        <button onClick={handleFlip}>Back</button>
      </Container>
    </ReactCardFlip>
  );
};

export default Easy;
