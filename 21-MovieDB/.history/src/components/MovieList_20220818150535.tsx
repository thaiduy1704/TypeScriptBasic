import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../app/hooks';

const MovieList = () => {
	const { movieList } = useAppSelector((store) => store.movie);

	return <Container>
    {movieList.map((movie,index)=>{
      
    })}
  </Container>;
};

const Container = styled.div``;

export default MovieList;
