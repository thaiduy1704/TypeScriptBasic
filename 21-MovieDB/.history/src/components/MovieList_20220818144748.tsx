import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getMovieList } from '../features/movieThunk';
const MovieList = () => {
	const { movieList } = useAppSelector((store) => store.movie);
	const dispatch = useAppDispatch();
	console.log(movieList);

	useEffect(() => {
		dispatch(getMovieList);

		
		};
	}, [third]);

	return <div>MovieList</div>;
};

export default MovieList;
