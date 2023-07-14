'use client';
const { createSlice } = require("@reduxjs/toolkit");

const formSlice = createSlice({
    name: 'form',
    initialState: '',
    reducers: {
        changeValue(state, {payload}) {
            return payload;
        }
    }
});

export const {changeValue} = formSlice.actions;

export const formReducer = formSlice.reducer;