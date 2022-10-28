import React from 'react';
import styled from 'styled-components'

export interface CategoriesType {
	categories: string[];
}

const Category: React.FC<CategoriesType> = (categories) => {
	return (<Wrapper>
		{categories.map((category)=>{
			return
		})}
	</Wrapper>)
	
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
