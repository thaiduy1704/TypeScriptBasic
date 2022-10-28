import React from "react";
import styled from "styled-components";
import { PuffLoader } from "react-spinners";
const Loading = () => {
  return <Wrapper></Wrapper>;
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
