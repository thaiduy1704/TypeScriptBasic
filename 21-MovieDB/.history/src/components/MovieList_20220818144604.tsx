import React from 'react';
import { useAppSelector } from '../app/hooks';
i
const MovieList = () => {
	const { movieList } = useAppSelector((store) => store.movie);
	console.log(movieList);

	return <div>MovieList</div>;
};

export default MovieList;
