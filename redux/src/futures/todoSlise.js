import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [], 
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // Add a new todo
        addnew: (state, action) => {
            state.todos = [...state.todos, { text: action.payload, completed: false }];
          },
          
        actionCompeleted: (state, action) => {
            const index = action.payload; 
            state.todos[index].completed = !state.todos[index].completed;
          },
        deleted: (state, action) => {
            const index = action.payload; 
            state.todos = state.todos.filter((todos, i) => i !== index);
          },
          
    },
});

export default todoSlice.reducer;
export const { addnew, actionCompeleted, deleted} = todoSlice.actions;
