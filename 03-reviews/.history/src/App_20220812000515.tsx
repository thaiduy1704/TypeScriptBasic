import React, { useState, useEffect } from 'react';
import './App.css';
import Review, { ReviewType, ReviewFuntion } from './components/Review';
import { data } from './data/data';

function App() {
	const [index, setIndex] = useState<number>(0);
	const [review, setReview] = useState<ReviewType>(data[index]);
	// console.log(review);

	const nextPage = () => {
		setIndex((index) => {
			let newIndex = index + 1;
			if (newIndex > data.length - 1) return 0;
			return newIndex;
		});
	};

	const prevPage = () => {
		setIndex((index) => {
			let newIndex = index - 1;
			if (newIndex > data.length - 1) return 0;
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

	return;
	<div>
		<Review
			{...review}
			randomPage={randomPage}
			nextPage={nextPage}
			prevPage={prevPage}
		/>
		;
	</div>;
}

export default App;
