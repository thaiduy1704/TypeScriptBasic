import React from 'react';
import { useAppSelector } from '../app/hook';
import { ISingleMoveInList } from '../typing';
import second from 'styled-components';

const MovieList = () => {
	const { movieList } = useAppSelector((store) => store.movie);
	return <Container></Container>;
};

export default MovieList;
