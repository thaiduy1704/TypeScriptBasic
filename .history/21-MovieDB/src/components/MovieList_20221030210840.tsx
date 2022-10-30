import React from 'react';
import { useAppSelector } from '../app/hook';
import { ISingleMoveInList } from '../typing';
import styled from 'styled-components';
import Movie from './Movie';

const MovieList = () => {
	const { movieList } = useAppSelector((store) => store.movie);
	return (
		<Container>
			{movieList.map((movie) => {
				return <Movie key={movie.imdbID} {...movie} />;
			})}
		</Container>
	);
};
const Container = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
`;
export default MovieList;
