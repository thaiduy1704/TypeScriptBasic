import React from 'react';
import { useAppSelector } from '../app/hook';
import { ISingleMoveInList } from '../typing';
import styled from 'styled-components';

const MovieList = () => {
	const { movieList } = useAppSelector((store) => store.movie);
	return <Container></Container>;
};
const Container = styled.section;
export default MovieList;
