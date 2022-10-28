import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { searchMovie } from '../features/movieSlice';
import { IoSearchOutline } from 'react-icons/io5';

const SearchForm = () => {
	const { query } = useAppSelector((store) => store.movie);
	const dispatch = useAppDispatch();
	return (
		<Header>
			<h1>Search Movie</h1>
			<form>
				<input
					type='text'
					value={query}
					onChange={(e) => dispatch(searchMovie(e.target.value))}
				/>
				<button type='submit'>
					<IoSearchOutline />
				</button>
			</form>
			{error.show && <h4 className='error'>{error.msg}</h4>}
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
