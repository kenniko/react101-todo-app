import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoList />
      <TodoForm />
    </div>
  );
}
export default App;
