import React, { useState, useEffect } from 'react';
import './App.css';

import { data } from './data/data';
import styled from 'styled-components';

function App() {
	const [index, setIndex] = useState<number>(0);
	const [review, setReview] = useState(data[index]);

	const nextPage = () => {};
	const prevPage = () => {};
	const randowPage = () => {};

	useEffect(() => {
		setReview(data[index]);
	}, [index]);

	return (
		<Wrapper className='App'>
			<div className='title'></div>
		</Wrapper>
	);
}

const Wrapper = styled.main`
	width: 80vw;
	max-width: var(--fixed-width);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 8rem auto;

	.title {
		text-align: center;
	}
	h1 {
		text-transform: uppercase;
		font-size: 3rem;
		letter-spacing: 3px;
		margin-bottom: 1rem;
	}
	.underline {
		background-color: var(--clr-primary);
		width: 15rem;
		height: 5px;
		margin-inline: auto;
	}
`;

export default App;
