import React, { useState } from 'react';
import './App.css';
import Review, { ReviewType, ReviewFuntion } from './components/Review';
import { data } from './data/data';

function App() {
	const [index, setIndex] = useState<umber>(0);
	const [review, setReview] = useState<ReviewType>(data[index]);

	return <h1>ThaiDuy</h1>;
}

export default App;
