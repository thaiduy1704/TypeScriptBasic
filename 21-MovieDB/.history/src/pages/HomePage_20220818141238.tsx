import { useAppSelector } from '../app/hooks';
import second from 'styled-components';
import { Loading, Movie, MovieList, SearchForm } from '../components/index';
const HomePage = () => {
	const { isLoading } = useAppSelector((store) => store.movie);

	return <Container></Container>;
};
const Container = styled.div``;

export default HomePage;
