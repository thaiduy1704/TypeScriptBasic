import { useAppSelector } from '../app/hooks';
import styled from 'styled-components';
import { Loading, Movie, MovieList, SearchForm } from '../components/index';
const HomePage = () => {
	const { isLoading, query } = useAppSelector((store) => store.movie);

  

	return (
		<Container>
			<MovieList />
		</Container>
	);
};
const Container = styled.div``;

export default HomePage;
