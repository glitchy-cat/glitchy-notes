import React from "react";
import TodoList from "./Todolist";

function Todo({text}) {
  return (
    <div>
      <li>{text}</li>
      <button>delete</button>
      <button>compete</button>
    </div>
  );
}

export default Todo;
