import { createSlice } from '@reduxjs/toolkit';
import { quizThunk } from './quizThunk';
import { ApiEndPoint, IQuestion } from '../typing';

interface IState {
	isLoading: boolean;
	error: string;
	quizList: IQuestion[];
	queryApi: ApiEndPoint;
}
const table = {
	sports: 21,
	history: 23,
	politics: 24,
};

const initialState = {
	isLoading: false,
	error: '',
	quizList: [],
	querApi: {
		amount: 10,
		category: table['sports'],
		difficulty: 'easy',
	},
};

const quizSlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		hello: () => {},
	},
});

export default quizSlice.reducer;
