'use client';
const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = [{id: 1, text: 'Eating out', finished: true}];

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, {payload}) => {
                state.push(payload);
            },
            prepare: (text) => {
                const id = nanoid();
                return { payload: { id, text, finished: false } }
            }
        },
        removeTodo(state, {payload}) {
            state = state.filter(todo => todo.id !== payload)
        },
        toggleTodo(state, {payload}) {
            return state.map(todo => {
                if (todo.id === payload) {
                    return {
                        ...todo,
                        finished: !todo.finished,
                    }
                }
                return todo
            })
        }
    }
});

export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;