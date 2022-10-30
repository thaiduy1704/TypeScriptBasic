import React, { FormEvent } from 'react';
import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';

export interface ISearchBar {
	onSubmitHandler: (e: FormEvent) => void;
	value: string;
}

const SearchBar = ({ onSubmitHandler, value }: ISearchBar) => {
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
