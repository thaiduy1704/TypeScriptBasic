import styled from "styled-components";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

import { Loading } from "./components";
import Tour, { ITour } from "./components/Tour";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [tours, setTours] = useState<ITour[]>([]);

  const fetchData = async (url: string) => {
    try {
      setIsLoading(true);
      const reponse: AxiosResponse<ITour[]> = await axios(url);
      setTours(reponse);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, []);
  if (isLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div className="content"></div>
      </Wrapper>
    );
  }
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
