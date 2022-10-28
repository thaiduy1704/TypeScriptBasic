import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IError, IMovieInfo, ISingleMoveInList } from '../typing';

const APT_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const getMovieList = createAsyncThunk<
	ISingleMoveInList[],
	string,
	{ rejectValue: IError }
>('movie/getMovieList'),async (:type) => {
  
}
