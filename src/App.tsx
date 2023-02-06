import "./App.css";
import AddTodo from "./app/features/addTodo/addTodo";

function App() {
  return (
    <div style={{
      display: "flex",
      padding: "10px",
    }}>
     <AddTodo />
    </div>
  );
}

export default App;
