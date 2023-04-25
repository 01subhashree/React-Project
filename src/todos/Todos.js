import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodos } from "../redux/todosSlice";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItems";
import style from "./Todos.module.css";

function Todos() {
  const [todo, setTodo] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const AddTodos = () => {
    setTodo("");
    dispatch(
      addTodo({
        title: todo,
      })
    );
  };
  const updateTodos = () => {
    setIsVisible(false);
  };

  const handleEdit = () => {
    setIsVisible(true);
    // dispatch(
    //   editTodos({
    //     title: todo,
    //   })
    // );
  };

  return (
    <>
      {isVisible ? (
        <div>
          <input
            type="text"
            placeholder="Enter your text ...."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={updateTodos}>Update</button>
        </div>
      ) : (
        <div>
          <input
            className={style.input}
            type="text"
            placeholder="Enter your text ...."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className={style.button} onClick={AddTodos}>
            Add
          </button>
          <div className={style.Todo}>
            <ul>
              {todos.map((elem) => (
                <div key={elem.id}>
                  <TodoItem
                    id={elem.id}
                    title={elem.title}
                    completed={elem.completed}
                    handleEdit={handleEdit}
                  />
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Todos;
