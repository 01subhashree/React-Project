import React, { useState } from "react";
import style from "./Todos.module.css";
import TodoList from "./TodoList";

const Todos = () => {
  const [data, setData] = useState("");
  const [todos, setTodos] = useState([]);

  const clickHandler = () => {
    if (data !== "") {
      setTodos([...todos, { title: data, status: false }]);
      setData("");
      console.log(todos);
    }
  };
  const CompleteTodos = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, status: !todo.status } : todo
      )
    );
    console.log(todos);
  };
  const deleteTodos = (index) => {
    setTodos(todos.filter((ele, id) => id !== index));
    console.log(todos);
  };
  const count = todos.filter((elem) => !elem.status).length;

  return (
    <div className={style.wrapper}>
      <h1>Pending task ({count})</h1>
      <div className={style.container}>
        {todos.map((todo, index) => {
          return (
            <div className={style.box} key={index}>
              <TodoList
                todo={todo}
                deleteTodos={() => deleteTodos(index)}
                addTodos={() => CompleteTodos(index)}
              />
            </div>
          );
        })}
      </div>
      <div className={style.inputBox}>
        <input
          placeholder="enter your text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button className={style.btn} onClick={clickHandler}>
          Add
        </button>
      </div>
    </div>
  );
};
export default Todos;
