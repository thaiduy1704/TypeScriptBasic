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
	quertApi: {
		amount: 10,
		category: table['sports'],
		difficu
	},
};

const quizSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		hello: () => {},
	},
});

export default quizSlice.reducer;
