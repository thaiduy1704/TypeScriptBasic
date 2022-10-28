import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getMovieInfo } from '../features/movieThunk';
const defaultImage =
	'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';
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

	return <img src={Poster === 'N/A' ? defaultImage : Poster} alt='' />;
};

export default SingleMoviePage;
