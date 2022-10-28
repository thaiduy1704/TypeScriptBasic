import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';

const MovieList = () => {
	const { movieList } = useAppSelector((store) => store.movie);
	const dispatch = useAppDispatch();
	console.log(movieList);

	useEffect(() => {
		dispatch(getMovieList('doctor'));
	}, []);

	return <div>MovieList</div>;
};

export default MovieList;
