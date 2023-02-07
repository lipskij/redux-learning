import { useDispatch } from "react-redux";
import { removeTodo } from "./addTodoSlice";

export const TodoList: React.FC = ({ todos }: any) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Todo List</h1>
      {todos.map((todo: string, index: number) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p>{index + 1}. {todo}</p>
          <button onClick={() => dispatch(removeTodo(todo))}>Remove</button>
        </div>
      ))}
      <hr />
    </div>
  );
};
