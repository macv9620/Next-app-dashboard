import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter/counterSlice';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//PARA DISPARAR ACCIONES Y ACTUALIZAR ESTADO
export const useAppDispatch: () => AppDispatch = useDispatch;
//PARA OBTENER ESTADO
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;