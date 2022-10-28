import React from 'react';
import './App.css';
import styled from 'styled-components';
import { data } from './data/data';
function App() {
	return (
		<Wrapper>
			<div className='info'>
				<h1>Question and Answer about login</h1>
			</div>
			<div className='question__container'>
				{data.map((item,index))}
			</div>
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
