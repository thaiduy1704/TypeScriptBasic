import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		//Slice => name:nameReducer(nameSlice)
	},
});

export type AppDispach = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType=void>=
