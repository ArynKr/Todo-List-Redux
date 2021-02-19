import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";

const todoList = [{ item: "todo", done: false, id: 23232 }];

function App() {
  return (
    <div className="App">
      <div className="app_container"></div>
      {todoList.map((item) => (
        <TodoItem name={item.item} done={item.done} id={item.id} />
      ))}
      <Input />
    </div>
  );
}

export default App;
