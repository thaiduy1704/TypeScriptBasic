import React from "react";
import { PersonType } from "./Person";

export interface CardType {
  personList: PersonType[];
  restartPerson: () => void;
  deletePerson: () => void;
}

const Card = ({ personList, restartPerson, deletePerson }: CardType) => {
  return <div>Card</div>;
};

export default Card;
