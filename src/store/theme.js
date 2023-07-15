'use client';

const { createSlice } = require("@reduxjs/toolkit");

const themeSlicer = createSlice({
    name: 'theme',
    initialState: 'light',
    reducers: {
        toggleTheme(state) {
            return state === 'light' ? 'dark' : 'light';
        }
    }
})

export const themeReducer = themeSlicer.reducer;

export const {toggleTheme} = themeSlicer.actions