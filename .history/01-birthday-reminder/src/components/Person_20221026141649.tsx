import React from "react";

export interface PersonType {
  id: number;
  name: string;
  age: number;
  image: string;
}
const Person = ({}: PersonType) => {
  return <div>Person</div>;
};

export default Person;
