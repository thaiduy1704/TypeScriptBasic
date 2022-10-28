import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { getMovieInfo } from '../features/movieThunk';

const SingleMoviePage = () => {
	const id = useParams();
	const { movieInfo, isLoading } = useAppSelector((store) => store.movie);

	useEffect(() => {
		if(!id)
		return () => {
			second;
		};
	}, [third]);

	return <div>SingleMoviePage</div>;
};

export default SingleMoviePage;
