import { createSlice } from "@reduxjs/toolkit";

export const addTodoSlice = createSlice({
  name: "addTodo",
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { addTodo } = addTodoSlice.actions;

export const selectAddTodo = (state) => state.addTodo.value;

export default addTodoSlice.reducer;
