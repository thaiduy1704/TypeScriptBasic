import React, { useState } from 'react';
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
	  
	
	  return () => {
		second
	  }
	}, [third])
	

	const randomPage = () => {
		const random = Math.floor(Math.random() * data.length);
		setIndex(random);
	};

	return;
	<Review
		{...review}
		randomPage={randomPage}
		nextPage={nextPage}
		prevPage={prevPage}
	/>;
}

export default App;
