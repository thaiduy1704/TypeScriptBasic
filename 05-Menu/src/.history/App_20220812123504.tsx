import React, { useState } from 'react';
import './App.css';
import Category from './components/Category';
import Food, { FoodType } from './components/Food';
import styled from 'styled-components';
import { data } from './data/data';

const allCategories = [
	'all',
	...Array.from(new Set(data.map((item) => item.category))),
];

function App() {
	const [items, setItems] = useState<FoodType[]>(data);

	const filterMenu = (category: string) => {
		if (category === 'all') {
			setItems(data);
			return items;
	
		}
	};
	return (
		<Wrapper className='App'>
			<div className='title'>
				<h1>Our Menu</h1>
				<div className='underline'></div>
			</div>
			<div className='content'>
				<Category categories={allCategories} filterMenu={filterMenu} />
				<div className='menu'>
					{items.map((item) => {
						return <Food {...item} key={item.id} />;
					})}
				</div>
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
