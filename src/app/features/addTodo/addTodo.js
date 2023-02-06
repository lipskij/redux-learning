import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./addTodoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const add = useSelector((state) => state.addTodo.value);
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
        <button type="submit" onClick={(e) => {
          e.preventDefault();
          dispatch(addTodo(todo));
          setTodo("");
        }}>Add Todo</button>
      </form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {add.map((item, index) => {
          return <span key={index}>{item}</span>;
        })}
      </div>
    </div>
  );
};

export default AddTodo;
