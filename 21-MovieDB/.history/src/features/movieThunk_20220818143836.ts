import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IError, IMovieInfo, ISingleMoveInList } from '../typing';

const APT_ENDPOINT = `
http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const getMovieList = createAsyncThunk<
	ISingleMoveInList[],
	string,
	{ rejectValue: IError }
>('movie/getMovieList', async (query, thunkAPI) => {
	const url = `${APT_ENDPOINT}&s=${query}`;
	const response = await axios.get(url);
	const data = response.data;
	console.log(data);

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
