import styled from 'styled-components';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { Loading, MovieList, SearchBar } from '../components';
import { getMovieList } from '../feature/movieThunk';
const HomePage = () => {
	const { isLoading, query, movieList } = useAppSelector(
		(store) => store.movie
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getMovieList(query));
		console.log(movieList);
	}, [query]);

	return (
		<Container>
			<header>
				<h1>Search Movie</h1>
				<SearchBar />
			</header>
			{isLoading ? <Loading /> : <MovieList movieList={movieList} />}
		</Container>
	);
};
const Container = styled.div`
	width: 90vw;
	max-width: var(--max-width);
	margin-inline: auto;

	header {
		margin-top: 3rem;
		margin-bottom: 2rem;

		@media only screen and (min-width: 1200px) {
			width: 30rem;
		}
	}
`;
export default HomePage;
