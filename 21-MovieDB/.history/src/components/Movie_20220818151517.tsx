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
	/* position: absolute; */
	overflow: hidden;
	height: 25rem;
	cursor: pointer;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: var(--radius);
	}
	.info {
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		padding: 0.5rem;
		background-color: rgba(0, 0, 0, 0.5);
		transform: translateY(100%);
		transition: var(--transition);
		p {
			color: white;
			font-size: 1.2rem;
			font-weight: bold;
			margin: 0;
			line-height: 1.5rem;
			letter-spacing: 1px;
		}
	}

	:hover {
		.info {
			transform: translateY(0);
		}
	}
`;
export default Movie;
