import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IError, IMovieInfo, ISingleMoveInList } from '../typing';

import second from './movieThunk'

const initialState = {};

const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

export default movieSlice.reducer;
