import React from 'react';
import { useAppSelector } from '../app/hooks';
const MovieList = () => {
  const {movieList} = useAppSelector

	return <div>MovieList</div>;
};

export default MovieList;
