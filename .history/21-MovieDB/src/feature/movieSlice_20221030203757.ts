import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import { ISingleMovieInList, IMovieInfo, IError } from '../typing';


export interface MovieState {
	isLoading: boolean;
	error: IError;
	query: string;
	movieList: ISingleMovieInList[];
	movieInfo: IMovieInfo;
}
const initialState = {
    isLoading: false,
	error: {
		show: false,
		msg: '',
	},
	query: 'doctor',
	movieList: [],
	movieInfo: {
		Poster: 'Not Found',
		Title: 'Not Found',
		Plot: 'Not Found',
		Year: 'Not Found',
	},
    
}
const roomSlice = createSlice({
   	name: 'movie',
	initialState,
	reducers: {
		searchMovie: (state: { query: string }, action: PayloadAction<string>) => {
			state.query = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getAllMovie.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getAllMovie.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.movieList = payload;
			state.error = {
				show: false,
				msg: '',
			};
		});
		builder.addCase(getAllMovie.rejected, (state, { payload, error }) => {
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
		builder.addCase(getMovieInfo.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.movieInfo = payload;
		});
		builder.addCase(getMovieInfo.rejected, (state, { payload, error }) => {
			state.isLoading = false;
			if (payload) {
				state.error = payload;
			} else {
				state.error = {
					show: true,
					msg: error.message as string,
				};
			}
		});
	},
});

export const { searchMovie } = movieSlice.actions;

export default movieSlice.reducer;
