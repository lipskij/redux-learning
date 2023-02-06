import { configureStore } from "@reduxjs/toolkit";
import addTodoSlice from "./features/addTodo/addTodoSlice";

export default configureStore({
  reducer: {
    addTodo: addTodoSlice,
  },
});
