import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { getMovieInfo } from '../features/movieThunk';

const SingleMoviePage = () => {
	const id = useParams();
	const { movieInfo, isLoading } = useAppSelector((store) => store.movie);

	useE
	return <div>SingleMoviePage</div>;
};

export default SingleMoviePage;
