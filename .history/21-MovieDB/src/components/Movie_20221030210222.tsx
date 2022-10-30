import React from 'react';
import styled from 'styled-components';

import { ISingleMoveInList } from '../typing';

const Movie = ({ Title, Poster, Year, imdbID }: ISingleMoveInList) => {
	return (
		<Container>
			<div></div>
		</Container>
	);
};
const Container = styled.article``;

export default Movie;
