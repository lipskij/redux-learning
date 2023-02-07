import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, selectTodo } from "./addTodoSlice";
import { TodoList } from "./TodoList";

const AddTodo = () => {
  const add = useSelector(selectTodo);
  const dispatch = useDispatch();
  const [todo, setTodo] = React.useState("");
  const [error, setError] = React.useState("");

  useEffect(() => {
    if (add.includes(todo)) {
      setError("Item already exists");
    } else {
      setError("");
    }
  }, [todo, add]);

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
        {error ? <p style={{ margin: 0, color: "red" }}>{error}</p> : null}
        <input
          type='text'
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button
          disabled={error}
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
