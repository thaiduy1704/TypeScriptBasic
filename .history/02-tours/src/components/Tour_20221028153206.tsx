import React from "react";

export interface ITour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}
const Tour = ({ id, name, image, info, price }: ITour) => {
  return <div>Tour</div>;
};

export default Tour;
