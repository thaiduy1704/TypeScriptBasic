import { FormEvent } from 'react';
import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../app/hook';
import { getMovieList } from '../feature/movieThunk';
import { searchMovie } from '../feature/movieSlice';

const SearchBar = () => {
	const { query } = useAppSelector((store) => store.movie);
	const dispatch = useAppDispatch();
	const onSubmitHandler = (e: FormEvent) => {
		e.preventDefault();
		dispatch(getMovieList(query));
	};
	return (
		<Container onSubmit={onSubmitHandler}>
			<input
				type='text'
				value={query}
				onChange={(e) => {
					dispatch(searchMovie(e.target.value));
				}}
			/>
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
