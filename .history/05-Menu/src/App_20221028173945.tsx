import React, { useState } from 'react';
import './App.css';

import styled from 'styled-components';
import { data } from './data/data';
import Category from './components/Category';
import Food, { IFood } from './components/Food';

const categories = [
	'all',
	...Array.from(new Set(data.map((item) => item.category))),
];
function App() {
	const [menu, setMenu] = useState<IFood[]>(data);
	const [category, setCategory] = useState('all');
	const filterFood = (category: string) => {
		if (category === 'all') {
			setMenu(data);
		} else {
			const newFood = data.filter((item) => item.category === category);
			setMenu(newFood);
		}
	};

	return (
		<Wrapper className='App'>
			<div className='title'>
				<h1>Our Menu</h1>
				<div className='underline'></div>
			</div>
			<div className='content'>
				<Category categories={categories} filterFood={filterFood} />
				{menu.map((food) => {
					return <Food key={food.id} {...food} />;
				})}
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.main`
	width: 80vw;
	max-width: var(--max-width);
	margin: 5rem auto;
	.title {
		text-align: center;
		margin-bottom: 2rem;
		h1 {
			font-size: 4rem;
		}
		.underline {
			background-color: var(--clr-primary);
			width: 8rem;
			height: 4px;
			margin: 0.5rem auto;
		}
	}

	.menu {
		display: grid;
		grid-gap: 2rem;
		grid-template-columns: 1fr 1fr;
	}
	@media only screen and (max-width: 1200px) {
		.menu {
			grid-template-columns: 1fr;
		}
		article {
			grid-template-columns: 30rem 1fr;
			padding-inline: 10rem;
		}
	}
`;

export default App;
