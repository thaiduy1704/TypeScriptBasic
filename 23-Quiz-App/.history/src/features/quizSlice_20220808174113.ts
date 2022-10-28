import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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

const initialState: IState = {
	isLoading: false,
	error: '',
	quizList: [],
	queryApi: {
		amount: 10,
		category: table['sports'],
		difficulty: 'easy',
	},
};

const quizSlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		queryQuizForm: (state: IState, action: PayloadAction<ApiEndPoint>) => {
			state.queryApi = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(qui)
	},
});

export default quizSlice.reducer;
