import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer:{
    //Slice => name:nameReducer(nameSlice)


  }
})

export type AppDispach = typeof store.dispatch