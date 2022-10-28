import React from "react";

export interface ITour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}
const Tour = ({}: ITour) => {
  return <div>Tour</div>;
};

export default Tour;
