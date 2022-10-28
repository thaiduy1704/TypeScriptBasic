import React from 'react';
export interface IFood {
	id: number;
	title: string;
	category: string;
	price: number;
	img: string;
	desc: string;
}
const Food = ({ id, title, price, img, desc }: IFood) => {
	return <div>Food</div>;
};

export default Food;
