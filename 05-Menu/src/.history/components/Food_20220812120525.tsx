import React from 'react';

export interface FoodType {
	id: number;
	title: string;
	category: string;
	price: number;
	img: string;
	desc: string;
}

const Food:React.FC< = () => {
	return <div>Food</div>;
};

export default Food;
