import React from 'react';
export interface IFood {
	id: number;
	title: string;
	category: string;
	price: number;
	img: string;
	desc: string;
}
const Food = ({ id, title, price, img, desc, category }: IFood) => {
	return <Wrapper>
			<img src={img} alt={title} />
			<div className='info'>
				<header>
					<h3>{title}</h3>
					<h4>{price}</h4>
				</header>
				<p>{desc}</p>
			</div>
		</Wrapper>

export default Food;
