import { createSlice } from '@reduxjs/toolkit';

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

export default testSlice.reducer;
