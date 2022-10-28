import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IError, IMovieInfo, ISingleMoveInList } from '../typing';

import { getMovieList } from './movieThunk';

export interface MovieState {
	isLoading: boolean;
	error: IError;
	query: string;
	movieList: ISingleMoveInList[];
	movieInfo: IMovieInfo;
}

const initialState: MovieState = {
	isLoading: false,
	error: {
		show: false,
		msg: '',
	},
	query: 'doctor',
	movieList: [],
	movieInfo: {
		Poster: 'Not Found',
		Tilte: 'Not Found',
		Plot: 'Not Found',
		Year: 'Not Found',
	},
};

const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
    builder.addCase(getMovieList.pending,(state)=>{})
  },
});

export default movieSlice.reducer;
