import React, { Component } from "react";
import "./styles.css";

import Todo from "./models/todo.model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="">
      <ul>
        {todos &&
          todos.map((todo: Todo) => (
            <SingleTodo
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
