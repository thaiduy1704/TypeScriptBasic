import React from 'react';
import './App.css';
import styled from 'styled-components';
function App() {
	return (
		<Wrapper>
			<div className='info'></div>
		</Wrapper>
	);
}

const Wrapper = styled.main`
	width: 80vw;
	min-width: var(--fixex-width);
	margin: 5rem auto;
	background-color: var(--clr-white);
	padding: 3rem;
	border-radius: var(--radius);
	display: grid;
	grid-template-columns: 25rem 1fr;
	h1 {
		font-size: 3rem;
	}
	.info {
		padding-top: 2rem;
	}
`;

export default App;
