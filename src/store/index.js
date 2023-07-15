'use client';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { todoReducer } from './todo'
import { formReducer } from './form';
import { filterReducer } from './filter';
import { themeReducer } from './theme';

const store = configureStore({
    reducer: {
        todo: todoReducer,
        form: formReducer,
        filter: filterReducer,
        theme: themeReducer,
    },
    devTools:true,
})

export default store;