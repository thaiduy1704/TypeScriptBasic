import React, { useState } from 'react';
import './App.css';
import Review, { ReviewType, ReviewFuntion } from './components/Review';
import { data } from './data/data';

function App() {
	const [index, setIndex] = useState<number>(0);
	const [review, setReview] = useState<ReviewType>(data[index]);

	const nextPage = () => {
		setIndex((index) => {
			let newIndex = index + 1;
			if(newIndex>review.length -1) return 0;
			
		});
	};

	return <h1>ThaiDuy</h1>;
}

export default App;
