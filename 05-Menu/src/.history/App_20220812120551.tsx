import React from 'react';
import './App.css';

function App() {
	return;
}

const Wrapper = styled.main`
	width: 80vw;
	max-width: var(--max-width);
	margin: 5rem auto;
	.title {
		text-align: center;
		margin-bottom: 2rem;
		h1 {
			font-size: 4rem;
		}
		.underline {
			background-color: var(--clr-primary);
			width: 8rem;
			height: 4px;
			margin: 0.5rem auto;
		}
	}

	.menu {
		display: grid;
		grid-gap: 2rem;
		grid-template-columns: 1fr 1fr;
	}
	@media only screen and (max-width: 1200px) {
		.menu {
			grid-template-columns: 1fr;
		}
		article {
			grid-template-columns: 30rem 1fr;
			padding-inline: 10rem;
		}
	}
`;

export default App;
