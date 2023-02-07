import { createSlice } from "@reduxjs/toolkit";

export const addTodoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const newState = [...state.value, action.payload];
      return { value: newState };
    },
  },
});

export const { addTodo } = addTodoSlice.actions;

export const selectAddTodo = (state) => state.addTodo.value;

export default addTodoSlice.reducer;
