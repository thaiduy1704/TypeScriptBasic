import React from 'react';
import { useAppSelector } from '../app/hooks';
import { Loading, Movie, MovieList, SearchForm } from '../components/index';
const HomePage = () => {
	const { isLoading } = useAppSelector((store) => store.movie);

	return <Container>

  </Container>;
};
const Container = st

export default HomePage;
