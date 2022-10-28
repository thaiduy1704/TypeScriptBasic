import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IError, IMovieInfo, ISingleMoveInList } from '../typing';

const APT_ENDPOINT = `ttp://www.omdbapi.com/?i=tt3896198&apikey=1a7539a4`;

const getMovieList = createAsyncThunk<
	ISingleMoveInList[],
	string,
	{ rejectValue: IError }
>('movie/getMovieList', async (query, thunkAPI) => {
	const url = `${APT_ENDPOINT}&s=${query}`;
	const response = await axios.get(url);
	const data = response.data;

	if (data.Response === 'False') {
		const error = {
			show: true,
			msg: data.Error as string,
		};
		return thunkAPI.rejectWithValue(error);
	}
	return data.Search as ISingleMoveInList[];
});

export { getMovieList };
