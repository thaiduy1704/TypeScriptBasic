import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import Movie from './Movie';
const MovieList = () => {
	const { movieList } = useAppSelector((store) => store.movie);

	return (
		<Container>
			{movieList.map((movie, index) => {
				return <Movie {...movie} key={index} />;
			})}
		</Container>
	);
};

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
	grid-gap: 2rem;
	margin-bottom: 5rem;
`;

export default MovieList;
