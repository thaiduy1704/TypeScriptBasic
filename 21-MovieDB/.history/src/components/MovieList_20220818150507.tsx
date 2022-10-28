import React, { useEffect } from 'react';
import second from 'styled-components'
import { useAppSelector, useAppDispatch } from '../app/hooks';

const MovieList = () => {
	const { movieList } = useAppSelector((store) => store.movie);

	return;
};

const Container = styled.div`
  
`

export default MovieList;
