import React from 'react';
import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';

const SearchBar = () => {
	return (
		<Container>
			<input type='text' />
			<button type='submit'>
				<IoSearchOutline />
			</button>
		</Container>
	);
};
const Container = styled.form`
	display: flex;
	justify-content: flex-start;
`;
export default SearchBar;
