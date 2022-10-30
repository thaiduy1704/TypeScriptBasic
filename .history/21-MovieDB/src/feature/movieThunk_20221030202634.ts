import {createAsyncThunk} from '@reduxjs/toolkit'

import axios from 'axios'

import {ISingleMovieInList,IMovieInfo,IError} from '../app/typing'

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
