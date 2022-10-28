import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

const SingleMoviePage = () => {
	const id = useParams();
	const {movieInfo} = useAppSelector((store))
	return <div>SingleMoviePage</div>;
};

export default SingleMoviePage;
