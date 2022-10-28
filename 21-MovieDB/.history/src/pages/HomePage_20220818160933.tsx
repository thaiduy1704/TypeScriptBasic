import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import styled from 'styled-components';
import { getMovieList, getMovieInfo } from '../features/movieThunk';
import { Loading, Movie, MovieList, SearchForm } from '../components/index';
import { useParams } from 'react-router-dom';
const HomePage = () => {
	const id = useParams();
	const { movieInfo, isLoading, query } = useAppSelector(
		(store) => store.movie
	);

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!id) {
			return;
		}
		dispatch(getMovieList(query));
		
	}, [id]);

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
