import { is } from 'immer/dist/internal';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Loading } from '../components';
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

	if (isLoading) {
		<Loading />;
	}

	return <h1>Single</h1>;
};



const Container = styled.
export default SingleMoviePage;
