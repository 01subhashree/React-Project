import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodos } from "../redux/todosSlice";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItems";

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
        <>
          <input
            type="text"
            placeholder="Enter your text ...."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={updateTodos}>Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter your text ...."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button onClick={AddTodos}>Add</button>
          <div>
            <ul>
              {todos.map((elem) => (
                <li key={elem.id}>
                  <TodoItem
                    id={elem.id}
                    title={elem.title}
                    completed={elem.completed}
                    handleEdit={handleEdit}
                  />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Todos;
