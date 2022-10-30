import React from 'react';
import styled from 'styled-components';

import { ISingleMoveInList } from '../typing';
const defaultImage =
	'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';
const Movie = ({ Title, Poster, Year, imdbID }: ISingleMoveInList) => {
	return (
		<Container>
			<div>
				<img src={Poster === 'N/A' ? defaultImage : Poster} alt={Title} />
			</div>
		</Container>
	);
};
const Container = styled.article``;

export default Movie;
