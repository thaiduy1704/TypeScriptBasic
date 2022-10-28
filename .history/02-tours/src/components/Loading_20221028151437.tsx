import React from "react";
import styled from "styled-components";
import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    <Wrapper>
      <PuffLoader
        color="#49a6e9"
        size={80}
        speedMultiplier={0.5}
        className="center"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .center {
    margin-inline: auto;
  }
`;

export default Loading;
