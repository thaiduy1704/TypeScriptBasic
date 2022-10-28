import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import second from '../features/'

export const store = configureStore({
	reducer: {
		//Slice => name:nameReducer(nameSlice)
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
