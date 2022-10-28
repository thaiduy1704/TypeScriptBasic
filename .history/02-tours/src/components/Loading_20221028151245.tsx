import React from "react";

const Loading = () => {
  return <div>Loading</div>;
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
