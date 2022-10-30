import styled from 'styled-components';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { Loading, MovieList, SearchBar } from '../components';
import { getMovieList } from '../feature/movieThunk';
const HomePage = () => {
	const { isLoading, query, movieList, error } = useAppSelector(
		(store) => store.movie
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getMovieList(query));
	}, []);

	return (
		<Container>
			<header>
				<h1>Search Movie</h1>
				<SearchBar />
				{error.show && <h4 className='error'>{error.msg}</h4>}
			</header>
			{isLoading ? <Loading /> : <MovieList />}
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
		.error {
			font-size: 2rem;
			font-weight: 300;
			letter-spacing: var(--spacing);
			color: red;
			margin-top: 0.5rem;
		}

		@media only screen and (min-width: 1200px) {
			width: 30rem;
		}
	}
`;
export default HomePage;
