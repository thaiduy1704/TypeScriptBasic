import styled from 'styled-components';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useEffect } from 'react';

import { data } from './data/data';
import SingleInfo from './components/SingleInfo';
import { useIndex } from './hooks/useIndex';

function App() {
	const [index, prevIndex, nextIndex, setIndex] = useIndex(0, data.length);

	useEffect(() => {
		setInterval(() => {
			setIndex(index + 1);
		}, 3000);
	}, []);

	return (
		<Wrapper>
			<h1>Reviews</h1>
			<Container>
				<Icon className='pre' onClick={() => setIndex(index - 1)}>
					<FiChevronLeft />
				</Icon>
				{data.map((item, id) => {
					let position = '';
					if (id === index) position = 'active';
					if (id === prevIndex) position = 'pre';
					if (id === nextIndex) position = 'next';
					return <SingleInfo {...item} position={position} />;
				})}
				<Icon className='next'>
					<FiChevronRight />
				</Icon>
			</Container>
		</Wrapper>
	);
}
const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 0 4rem;
	width: 80vw;
	/* have to have a height */
	height: 450px;
	max-width: 800px;

	overflow: hidden;

	.pre {
		left: 0;
	}
	.next {
		right: 0;
	}
`;

const Icon = styled.div`
	display: flex;
	z-index: 1000;
	position: absolute;
	top: 200px;
	transform: translateY(-50%);
	justify-content: center;
	align-items: center;
	padding: 1rem;
	font-size: 2rem;
	color: white;
	background-color: #617d98;
	border-radius: var(--radius);
	cursor: pointer;
`;
export default App;
