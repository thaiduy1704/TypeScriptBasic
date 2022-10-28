import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IError, IMovieInfo, ISingleMoveInList } from '../typing';

const APT_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const getMovieList = createAsyncThunk<
	ISingleMoveInList[],
	string,
	{ rejectValue: IError }
>('movie/getMovieList'),async (query,thunkAPT) => {
  const url = `${APT_ENDPOINT}&s=${query}`;
  const response = await axios.get(url);
  const data = response.data;

  if(data.Response ==='False'){
    const error = {
      show:true,
      msg:data.Error as string,
    }
    return
  }
  
}
