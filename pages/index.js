import { React, useState } from "react";
import Form from "../components/Form";
import TodoList from "../components/Todolist";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <header>
        <h1>Welcome to glitchy-notes :)</h1>
      </header>
      <br />
      <br />
      <Form
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList />
    </div>
  );
}
