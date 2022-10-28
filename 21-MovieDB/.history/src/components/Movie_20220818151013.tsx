import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ISingleMoveInList } from '../typing';
const defaultImage =
	'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movie = ({ Poster, Tilte, Year, imdbID }: ISingleMoveInList) => {
	return (
		<Container>
			<Link to={`/movie/${imdbID}`}>
				<img src={Poster === "N/A"?} alt={Tilte} />
			</Link>
		</Container>
	);
};
const Container = styled.article``;
export default Movie;
