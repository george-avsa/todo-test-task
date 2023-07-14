const { createSlice } = require("@reduxjs/toolkit");


const fliterSlice = createSlice({
    name: 'filter',
    initialState: 'all',
    reducers: {
        changeSelector(state, {payload}) {
            return payload;
        }
    }
});

export const filterReducer = fliterSlice.reducer;

export const {changeSelector} = fliterSlice.actions;