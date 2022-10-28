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
	reducers: {
		searchMovie: (state: { query: string }, action: PayloadAction<string>) => {
			state.query = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getMovieList.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getMovieList.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.movieList = payload;
			state.error = {
				show: false,
				msg: '',
			};
		});
		builder.addCase(getMovieList.rejected,(state,));
	},
});

export default movieSlice.reducer;
