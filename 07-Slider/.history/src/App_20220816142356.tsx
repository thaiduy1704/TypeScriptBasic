import styled from 'styled-components';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useEffect } from 'react';

import { data } from './data/data';
import SingleInfo from './components/SingleInfo';

function App() {
	return (
		<Wrapper>
			<h1>Review</h1>
			<Container>
				<Icon>
					<FiChevronLeft />
				</Icon>
				{data.map((person, id) => {
					let position = '';
					return <SingleInfo {...person} position={position} />;
				})}
				<Icon>
					<FiChevronRight />
				</Icon>
			</Container>
		</Wrapper>
	);
}

export default App;
