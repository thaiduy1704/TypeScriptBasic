import { createSlice } from '@reduxjs/toolkit';
import { quizThunk } from './quizThunk';
import 
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
