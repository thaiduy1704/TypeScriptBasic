import styled from 'styled-components';
import { MovieList, SearchBar } from '../components';
const HomePage = () => {
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
`;
export default HomePage;
