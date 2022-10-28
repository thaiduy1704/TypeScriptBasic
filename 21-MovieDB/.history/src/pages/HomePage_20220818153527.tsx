import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import styled from 'styled-components';
import { getMovieList } from '../features/movieThunk';
import { Loading, Movie, MovieList, SearchForm } from '../components/index';
const HomePage = () => {
	const { isLoading, query, error } = useAppSelector((store) => store.movie);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getMovieList(query));
	}, []);

	return (
		<Container>
			<SearchForm />
			{isLoading ? <Loading /> : <MovieList />}
		</Container>
	);
};
const Container = styled.div`
	width: 90vw;
	max-width: var(--max-width);
	margin-inline: auto;
`;

export default HomePage;
