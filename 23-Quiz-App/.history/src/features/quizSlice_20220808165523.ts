import { createSlice } from '@reduxjs/toolkit';
import { quizThunk } from './quizThunk';
import { ApiEndPoint, IQuestion } from '../typing';

interface IState {
	isLoading: boolean;
	error: string;
	quizList: IQuestion[];
	queryApi: ApiEndPoint;
}

const initialState = {
	isLoading: false;
	console.error();
	
};

const quizSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		hello: () => {},
	},
});

export default quizSlice.reducer;
