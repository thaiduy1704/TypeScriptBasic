import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IError, IMovieInfo, ISingleMoveInList } from '../typing';

import { getMovieList, getMovieInfo } from './movieThunk';

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
	query: 'ghost',
	movieList: [],
	movieInfo: {
		Poster: 'Not Found',
		Title: 'Not Found',
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
		builder.addCase(getMovieList.rejected, (state, { payload, error }) => {
			state.isLoading = false;
			state.movieList = [];

			if (payload) {
				state.error = payload;
			} else {
				state.error = {
					show: true,
					msg: error.message as string,
				};
			}
		});
		builder.addCase(getMovieInfo.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getMovieInfo.fulfilled,(state,{payload}))
	},
});

export const { searchMovie } = movieSlice.actions;

export default movieSlice.reducer;
