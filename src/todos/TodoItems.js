import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todosSlice";

const TodoItems = ({ id, title, completed, handleEdit }) => {
  const dispatch = useDispatch();

  const handleComplement = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };
  const handleDelete = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={handleComplement} />
      {completed ? (
        <h3>
          <s>{title}</s>
        </h3>
      ) : (
        <h3>{title}</h3>
      )}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>❌</button>
    </div>
  );
};
export default TodoItems;
