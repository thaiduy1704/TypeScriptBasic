import React from 'react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IQuestion } from '../typing';

const quizThunk = createAsyncThunk<IQuestion[],void,{state}>() => {};

export { quizThunk };
