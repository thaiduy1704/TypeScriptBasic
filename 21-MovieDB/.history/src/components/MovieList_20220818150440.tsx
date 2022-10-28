import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';

const MovieList = () => {
	const { movieList } = useAppSelector((store) => store.movie);

	return;
};

export default MovieList;
