import React, { useState, useEffect } from 'react';
import './App.css';
import Review, { ReviewType, ReviewFuntion } from './components/Review';
import { data } from './data/data';
import styled from 'styled-components';

function App() {
	const [index, setIndex] = useState<number>(0);
	const [review, setReview] = useState<ReviewType>(data[index]);
	// console.log(review);

	const nextPage = () => {
		setIndex((index) => {
			let newIndex = index + 1;
			if (newIndex > data.length - 1) {
				return 0;
			}
			return newIndex;
		});
	};

	const prevPage = () => {
		setIndex((index) => {
			let newIndex = index - 1;
			if (newIndex < 0) {
				return data.length - 1;
			}
			return newIndex;
		});
	};

	useEffect(() => {
		setReview(data[index]);
	}, [index]);

	const randomPage = () => {
		const random = Math.floor(Math.random() * data.length);
		setIndex(random);
	};

	return (
		<Wrapper className='App'>
			<div className='title'>
				<h1>Our reviews</h1>
				<div className='underline'></div>
			</div>
			<Review
				{...review}
				randomPage={randomPage}
				nextPage={nextPage}
				prevPage={prevPage}
			/>
			;
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
