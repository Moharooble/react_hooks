import React from "react";
import Todo from "./Todo";
import { UseContext } from "../context/TodoContext"; // Assuming this is your custom hook

const Todos = () => {
  const { todos } = UseContext(); // Corrected hook usage

  return (
    <div>
      {todos &&
        todos.map(
          (
            todo,
            index // Checking todos, not todoss
          ) => (
            <div key={index}>
              <Todo todo={todo}/>
            </div>
          )
        )}
    </div>
  );
};

export default Todos;
