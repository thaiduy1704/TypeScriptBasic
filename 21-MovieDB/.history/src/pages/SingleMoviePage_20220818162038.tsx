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
	console.log(movieInfo);

	return <img src={Poster === "N/A"} alt='' />;
};

export default SingleMoviePage;
