import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import Movie from './Movie'
const MovieList = () => {
	const { movieList } = useAppSelector((store) => store.movie);

	return <Container>
    {movieList.map((movie,index)=>{
      return<Movie/>
    })}
  </Container>;
};

const Container = styled.div``;

export default MovieList;
