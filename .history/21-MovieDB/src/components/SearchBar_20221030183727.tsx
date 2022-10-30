import React from 'react';
import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io';

const SearchBar = () => {
	return (
		<Container>
			<input type='text' />
			<button>
				<IoSearchOutline />
			</button>
		</Container>
	);
};
const Container = styled.form``;
export default SearchBar;
