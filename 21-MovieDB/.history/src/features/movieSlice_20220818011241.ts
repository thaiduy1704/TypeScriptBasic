import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IError, IMovieInfo, ISingleMoveInList } from '../typing';

import { getMovieList } from './movieThunk';

export interface MovieState{
  isLoading:boolean;
  error:IError;
  query:string;
  movieList :ISingleMoveInList[0],
  
}

const initialState = {


};

const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

export default movieSlice.reducer;
