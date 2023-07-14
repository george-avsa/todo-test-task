'use client';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { todoReducer } from './todo'
import { formReducer } from './form';

const store = configureStore({
    reducer: {
        todo: todoReducer,
        form: formReducer,
    },
    devTools:true,
})

export default store;