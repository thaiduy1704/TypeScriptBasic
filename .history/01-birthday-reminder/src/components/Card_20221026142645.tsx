import React from "react";
import { PersonType } from "./Person";
import second from "styled-components";

export interface CardType {
  personList: PersonType[];
  restartPerson: () => void;
  deletePerson: () => void;
}

const Card = ({ personList, restartPerson, deletePerson }: CardType) => {
  return <div>Card</div>;
};

export default Card;

const Wrapper = styled.section`
  background-color: white;
  width: 90vw;
  max-width: var(--fixed-width);
  padding: 4rem;
  border-radius: var(--radius);
  box-shadow: var(--dark-shadow);
  display: flex;
  flex-direction: column;
  margin: 3rem auto;

  button {
    background-color: var(--clr-background);
    border: none;
    border-radius: 5px;
    padding: 1rem;
    font-size: 2rem;
    color: white;
    cursor: pointer;
    margin: 1rem 0;
    transition: var(--transition);
  }
  button:hover {
    background-color: #df1563;
  }

  .disable {
    pointer-events: none;
    background-color: gray;
  }
`;
