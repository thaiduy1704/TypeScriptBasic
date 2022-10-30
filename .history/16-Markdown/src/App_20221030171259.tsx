import { useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const App = () => {
	return (
		<Container>
			<h1>Thaiduy</h1>
		</Container>
	);
};

const Container = styled.main`
	padding: 5rem;
	display: grid;
	min-height: 100vh;
	gap: 3rem;

	.markdown {
		box-shadow: var(--dark-shadow);
	}

	.input {
		width: 100%;
		height: 100%;
		border: none;
		resize: none;
		font-size: 3rem;
		padding: 2rem;
	}

	.result {
		border: 1px solid black;
		padding: 2rem;
	}

	@media only screen and (min-width: 922px) {
		grid-template-columns: 1fr 1fr;
	}
`;

export default App;

// <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
