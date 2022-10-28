import { is } from 'immer/dist/internal';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getMovieInfo } from '../features/movieThunk';

const SingleMoviePage = () => {
	const { id } = useParams();
	const { movieInfo, isLoading } = useAppSelector((store) => store.movie);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!id) {
			return;
		}
		dispatch(getMovieInfo(id));
	}, [id]);

	const { Title, Plot, Poster, Year } = movieInfo;
	
	if(isLoading)

	return <h1>Single</h1>;
};
export default SingleMoviePage;
