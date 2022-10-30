import React from 'react';
import { useAppSelector } from '../app/hook';
import { ISingleMoveInList } from '../typing';

const MovieList = () => {
	const { movieList } = useAppSelector((store) => store.movie);
	return <div>MovieList</div>;
};

export default MovieList;
