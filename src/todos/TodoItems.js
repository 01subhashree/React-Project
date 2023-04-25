import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todosSlice";
import style from "./Todos.module.css";

const TodoItems = ({ id, title, completed, handleEdit }) => {
  const dispatch = useDispatch();

  const handleComplement = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };
  const handleDelete = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <div className={style.TodoItems}>
      <li>
        <div className={style.box}>
          <input
            type="checkbox"
            checked={completed}
            onChange={handleComplement}
          />
          {completed ? (
            <h3>
              <s>{title}</s>
            </h3>
          ) : (
            <h3>{title}</h3>
          )}
          <button className={style.button} onClick={handleEdit}>
            Edit
          </button>
          <span onClick={handleDelete}>❌</span>
        </div>
      </li>
    </div>
  );
};
export default TodoItems;
