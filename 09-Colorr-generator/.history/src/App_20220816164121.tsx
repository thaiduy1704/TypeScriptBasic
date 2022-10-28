import styled from 'styled-components';
import { useState, useEffect } from 'react';

import SingleColor from './components/SingleColor';

import { HSL } from './typing';

function App() {
	return (
		<Container>
			<InputContainer>
				<h3>Color Generator</h3>
				<input type='text' id='input' />
        <input type="text" />
			</InputContainer>
		</Container>
	);
}

const Container = styled.section`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: left;
	flex-direction: column;
	align-items: center;
`;

const InputContainer = styled.div`
	display: flex;
	justify-content: left;
	align-items: center;
	padding: 2rem 4rem;
	width: 100%;
	column-gap: 3rem;
	h3 {
		font-size: 3.5rem;
		font-weight: bold;
		letter-spacing: 2px;
	}
	input {
		border: none;
		height: 40px;
		padding: 0.5rem 1rem;
		font-size: 2rem;
	}

	button {
		background-color: #49a6e9;
		padding: 1rem 2rem;
		font-size: 2rem;
		color: white;
		border: none;
		border-radius: var(--radius);
		transition: var(--transition);
		cursor: pointer;

		:hover {
			background-color: #49a6e9b8;
		}
	}
`;

const ColorContainer = styled.div`
	flex: 1;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
	/* grid-template-rows: repeat(auto-fit, minmax(96px, 1fr)); */
`;

export default App;
