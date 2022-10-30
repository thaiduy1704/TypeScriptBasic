import styled from 'styled-components';
import { SearchBar } from '../components';
const HomePage = () => {
	return (
		<Container>
			<header>
				<h1>Search Movie</h1>
				<SearchBar />
			</header>
		</Container>
	);
};
const Container = styled.div``;
export default HomePage;
