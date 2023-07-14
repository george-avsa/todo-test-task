'use client';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { todoReducer } from './todo'
import { formReducer } from './form';
import { filterReducer } from './filter';

const store = configureStore({
    reducer: {
        todo: todoReducer,
        form: formReducer,
        filter: filterReducer,
    },
    devTools:true,
})

export default store;