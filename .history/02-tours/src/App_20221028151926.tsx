import styled from "styled-components";
import { useState } from "react";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [tours, setTours] = useState([]);
  return (
    <Wrapper>
      <h1>Thaiduy</h1>
    </Wrapper>
  );
}
const Wrapper = styled.main`
  background-color: var(--clr-background);
  width: 90vw;
  max-width: var(--fixed-width);
  margin: 5rem auto;
  text-align: center;
  .content {
    display: flex;
    flex-direction: column;

    .title {
      margin-bottom: 3rem;
    }
    .underline {
      width: 12rem;
      height: 0.25rem;
      margin: 0 auto;
      background-color: var(--clr-primary);
    }
  }
`;

export default App;
