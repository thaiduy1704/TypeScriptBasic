import React, { useState } from 'react';
import './App.css';
import Review, { ReviewType, ReviewFuntion } from './components/Review';
import { data } from './data/data';

function App() {
	const [index, setIndex] = useState<Number>(0);
	const [review, setReview] = useState(data[index]);

	return <h1>ThaiDuy</h1>;
}

export default App;
