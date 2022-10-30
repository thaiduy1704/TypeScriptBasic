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
    name:'movie',
    initialState,
    reducers:{

    }

})
export default roomSlice.reducer;