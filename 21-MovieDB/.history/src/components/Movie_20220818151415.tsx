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
				<img src={Poster === 'N/A' ? defaultImage : Poster} alt={Tilte} />
				<div className='info'>
					<p>{Tilte}</p>
					<p>{Year}</p>
				</div>
			</Link>
		</Container>
	);
};
const Container = styled.article`
	position: absolute;
	overflow: hidden;
	height: 25rem;
	cursor: pointer;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius:var(--var)
	}
`;
export default Movie;
