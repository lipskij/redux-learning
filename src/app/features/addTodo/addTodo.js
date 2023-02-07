import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, selectTodo } from "./addTodoSlice";
import { TodoList } from "./TodoList";

const AddTodo = () => {
  const add = useSelector(selectTodo);
  const dispatch = useDispatch();
  const [todo, setTodo] = React.useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
      }}
    >
      <h1>AddTodo</h1>
      <form>
        <input
          type='text'
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            dispatch(addTodo(todo));
            setTodo("");
          }}
        >
          Add Todo
        </button>
      </form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <TodoList todos={add} />
      </div>
    </div>
  );
};

export default AddTodo;
