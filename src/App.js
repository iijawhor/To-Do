import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { TodoProvider } from "./contexts/TodoContexts";
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prevTodo) => [{ id: Date.now(), ...todo }, ...prevTodo]);
  };
  const toggleTodo = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoProvider value={{ todos, addTodo, toggleTodo }}>
      <div className="App">
        <h1 className="appHeaderTitle">Manage Your Tasks</h1>
        <Home />
      </div>
    </TodoProvider>
  );
}
export default App;
