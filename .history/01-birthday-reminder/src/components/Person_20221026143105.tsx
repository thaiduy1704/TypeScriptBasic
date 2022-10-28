import React from "react";

export interface PersonType {
  id: number;
  name: string;
  age: number;
  image: string;
}
const Person = ({ id, name, age, image }: PersonType) => {
  return <div>Person</div>;
};

export default Person;
