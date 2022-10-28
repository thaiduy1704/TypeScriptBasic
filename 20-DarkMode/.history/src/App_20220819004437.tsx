import styled from 'styled-components';
import Article from './Article';
import { articles } from './data';

function App() {
	return (
		<Container>
			<header>
				<h1>OverReacted</h1>
				<button>Toggle</button>
			</header>
			<section>
				{articles.map((article) => {
					return <Article {...article} key />;
				})}
			</section>
		</Container>
	);
}
const Container = styled.main``;

export default App;
