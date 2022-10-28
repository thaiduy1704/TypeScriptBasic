import { createSlice } from '@reduxjs/toolkit';
import {quizThi} from './quizThunk'

const initialState = {
	hello: 'hello',
};

const quizSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		hello: () => {},
	},
});

export default quizSlice.reducer;
