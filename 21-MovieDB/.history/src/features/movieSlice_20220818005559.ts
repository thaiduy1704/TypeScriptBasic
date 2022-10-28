import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IError, IMovieInfo, ISingleMoveInList } from '../typing';

const initialState = {};

const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});
