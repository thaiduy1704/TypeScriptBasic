import { useEffect } from 'react';
import styled from 'styled-components';
import Article from './Article';
import { articles } from './data';

function App() {
	const [toggleDarkMode, setToggleDarkMode] = useState<Boolean>(false);
	useEffect(() => {
		if (toggleDarkMode) {
			document.documentElement.className = 'dark-theme';
		} else {
			document.documentElement.className = 'light-theme';
		}

		return () => {
			second;
		};
	}, [third]);

	return (
		<Container>
			<header>
				<h1>OverReacted</h1>
				<button>Toggle</button>
			</header>
			<section>
				{articles.map((article) => {
					return <Article {...article} key={article.id} />;
				})}
			</section>
		</Container>
	);
}
const Container = styled.main`
	width: 90vw;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	max-width: var(--max-width);
	margin-inline: auto;
	padding: 4rem;
	header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 8rem;
		h1 {
			margin: 0;
		}
	}
`;

export default App;
