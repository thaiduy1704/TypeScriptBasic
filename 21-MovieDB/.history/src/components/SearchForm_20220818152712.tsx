import React from 'react';
import styled from 'styled-components';

const SearchForm = () => {
	const{query}
	return (
		<Header>
			<h1>Search Movie</h1>
			<form>
				<input type='text' value={query} />
			</form>
		</Header>
	);
};

const Header = styled.div`
	margin-top: 2rem;
	margin-bottom: 4rem;

	.error {
		font-size: 2rem;
		font-weight: 300;
		letter-spacing: var(--spacing);
		color: red;
		margin-top: 0.5rem;
	}

	form {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	input {
		width: 100%;
		padding: 0.5rem;
		border: none;
		font-size: 2rem;
		border-radius: var(--radius);
	}

	@media only screen and (min-width: 1200px) {
		width: 30rem;
	}

	svg {
		font-size: 2rem;
		margin-left: 0.1rem;
	}
`;

export default SearchForm;
