import {createAsyncThunk} from '@reduxjs/toolkit'

import axios from 'axios'


import {ISingleMovieInList,IMovieInfo,IError} from '../app/typing'

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;


const getAllMovie = createAsyncThunk<ISingleMovieInList[],string,{rejectValue:IError}>('movie/getAllMovie',async (query,thunkAPI) => {
    try {
        
            const url=`${API_ENDPOINT}&s=${query}`;

    
        const response = await axios.get(url)

        
    } catch (error:any) {
        return thunkAPI.rejectWithValue(error)
    }
    
})