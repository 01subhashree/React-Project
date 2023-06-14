import React from "react";
import style from "./Todos.module.css";

export default function TodoList({ todo, addTodos, deleteTodos }) {
  return (
    <div>
      {todo.status ? <s>{todo.title}</s> : <> {todo.title}</>}
      <span>
        <button className={style.btn1} onClick={addTodos}>
          Complete
        </button>
        <button className={style.btn2} onClick={deleteTodos}>
          Delete
        </button>
      </span>
    </div>
  );
}
