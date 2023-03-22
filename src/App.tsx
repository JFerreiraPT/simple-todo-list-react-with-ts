import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import Todo from "./components/models/todo.model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();
    if(!todo || todo.trim().length === 0) {
      return;
    }

    setTodos((prev) => [...prev, {
      id: Date.now(),
      todo,
      isDone: false,
    }])

    setTodo("");

    console.log(todos);
  }

  console.log("todo", todo);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
