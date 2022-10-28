import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ISingleMoveInList } from '../typing';
const defaultImage =
	'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movie = ({ Poster, Tilte, Year, imdbID }: ISingleMoveInList) => {
	return <Container></Container>;
};
const Container = styled.div``;
export default Movie;
