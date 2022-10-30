import styled from 'styled-components';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { MovieList, SearchBar } from '../components';
import { getMovieList } from '../feature/movieThunk';
const HomePage = () => {
	const dispatch = useAppDispatch();
	const { query } = useAppSelector((store) => store.movie);
	useEffect(() => {
		dispatch(getMovieList(query));
	}, [third]);

	return (
		<Container>
			<header>
				<h1>Search Movie</h1>
				<SearchBar />
			</header>
			<MovieList />
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
