import React, { useState, useEffect } from 'react';
import './App.css';

import { data } from './data/data';
import styled from 'styled-components';
import Review, { IReview } from './components/Review';

function App() {
	const [index, setIndex] = useState<number>(0);
	const [review, setReview] = useState<IReview>(data[index]);

	const nextPage = () => {
		setIndex((oldIndex) => {
			const nextIndex = oldIndex + 1;
			if (nextIndex > data.length - 1) return 0;
			return nextIndex;
		});
	};
	const prevPage = () => {
		setIndex((oldIndex) => {
			const prevIndex = oldIndex - 1;
			if (prevIndex < 0) return data.length - 1;
			return prevIndex;
		});
	};
	const randomPage = () => {};

	useEffect(() => {
		setReview(data[index]);
	}, [index]);

	return (
		<Wrapper className='App'>
			<div className='title'>
				<h1>Our Reviews</h1>
				<div className='underline'></div>
				<Review
					{...review}
					nextPage={nextPage}
					prevPage={prevPage}
					randomPage={randomPage}
				/>
			</div>
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
