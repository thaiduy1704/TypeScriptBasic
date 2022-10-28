import React from 'react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IQuestion } from '../typing';
import { RootState } from '../app/store';

const quizThunk = createAsyncThunk<IQuestion[],void,{state:RootState}>('quiz/getQuiz',async(_,thunkAPI)=>{
    try {
        const{quiz}=thunkAPI.getState();
        const{amout,category,difficulty}= quiz.qui
    } catch (error) {
        
    }
}) => {};

export { quizThunk };
