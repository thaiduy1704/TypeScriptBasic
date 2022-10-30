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
				<div className='info'>
					<p>{Title}</p>
					<p>{Year}</p>
				</div>
			</div>
		</Container>
	);
};
const Container = styled.article`
	position: relative;

	.info {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		padding: 0.5rem;
		background-color: rgba(0, 0, 0, 0.5);
	}
`;

export default Movie;
