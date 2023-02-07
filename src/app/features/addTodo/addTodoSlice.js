import { createSlice } from "@reduxjs/toolkit";

export const addTodoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, action) => {
      // check for repeating todos
      if (state.value.includes(action.payload)) {
        return state;
      }
      const newState = [...state.value, action.payload];
      return { ...state, value: newState };
    },
    removeTodo: (state, action) => {
      const newState = state.value.filter((todo) => todo !== action.payload);
      return { ...state, value: newState };
    },
  },
});

export const { addTodo, removeTodo } = addTodoSlice.actions;

export const selectTodo = (state) => state.addTodo.value;

export default addTodoSlice.reducer;
