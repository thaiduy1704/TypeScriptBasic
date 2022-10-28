import { useState } from 'react';
import styled from 'styled-components';
export interface ICategories {
	categories: string[];
	filterFood: (category: string) => void;
}

const Category = ({ categories }: ICategories) => {
	const [pickedCategory, setPickedCategory] = useState('all');
	return (
		<Wrapper>
			{categories.map((category, index) => {
				return (
					<button
						key={index}
						className={`${category === pickedCategory ? 'active' : ''}`}
						onClick={() => {
							setPickedCategory(category);
						}}>
						{category}
					</button>
				);
			})}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin-inline: auto;
	width: 50rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-bottom: 3rem;
	button {
		background-color: transparent;
		border: transparent;
		font-size: 2rem;
		text-transform: capitalize;
		font-weight: bold;
		color: var(--clr-primary);
		transition: var(--transition);
		padding: 0.5rem;
		border-radius: var(--radius);
		cursor: pointer;
	}
	button:hover {
		background-color: var(--clr-primary);
		color: white;
	}
	.active {
		background-color: var(--clr-primary);
		color: white;
	}
`;

export default Category;
