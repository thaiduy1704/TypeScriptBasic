import React, { FormEvent } from 'react';
import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';
import { useAppSelector } from '../app/hook';

const SearchBar = () => {
	const {} = useAppSelector((store) => store.movie);
	const onSubmitHandler = (e: FormEvent) => {
		e.preventDefault();
		dispatch(getMovieList(query));
	};
	return (
		<Container>
			<input type='text' value={value} />
			<button type='submit'>
				<IoSearchOutline />
			</button>
		</Container>
	);
};
const Container = styled.form`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	input {
		width: 100%;
		padding: 0.5rem;
		border: none;
		font-size: 2rem;
		border-radius: var(--radius);
	}
	svg {
		font-size: 2rem;
		margin-left: 1rem;
	}
`;
export default SearchBar;
