import { inputData} from './Atom'
import { useRecoilState } from 'recoil'
import { useState } from 'react';
import style from './ShowText.module.css';
import { Link } from 'react-router-dom';

const ShowText = () => {

    const [todo,setTodo ]= useRecoilState(inputData);
    const [edit, setEdit] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});
   
    const deleteData = (id) => {
        setTodo(todo.filter((elem)=>elem.id !== id))
    }
    function handleEditClick(elem) {
        setEdit(true);
        setCurrentTodo({ ...elem });
      }
   
    function handleEditFormSubmit(e) {
        e.preventDefault();
        handleUpdateTodo(currentTodo.id, currentTodo);
        setEdit(false)
    }

    function handleUpdateTodo(id, updatedTodo) {
        const updatedItem = todo.map((todo) => {
            return todo.id === id ? updatedTodo : todo;
        });
        setTodo(updatedItem);
        setEdit(true)
    }
    
    function handleEditInputChange(e) {
        setCurrentTodo({ ...currentTodo, title: e.target.value });
        console.log(currentTodo);
        // setEdit(false)
      }
   
    return (
        <div className={style.container}>
            <div className={style.container5}>
                <h1>Task List</h1>
                <Link className={style.Link} to={'/'}>Back To HomePage</Link>
            </div>
            
            {edit ? 
                <form className={style.container2} onSubmit={handleEditFormSubmit}>
                    <label htmlFor="editTodo">Edit todo: </label>
                    <div className={style.container3}>
                        <input
                        name="editTodo"
                        placeholder="Edit todo"
                        value={currentTodo.title}
                        onChange={handleEditInputChange}
                        />
                        <button className={style.button1} type="submit">Update</button>
                        <button className={style.button1} onClick={() => setEdit(false)}>Cancel</button>
                    </div>
                </form>    
                :
                <div className={style.mainContainer}>
                    {todo.map((elem) => {
                        return (
                            <div className={style.wrappers}>
                            <li key={elem.id}>
                                <span>{elem.title}</span>
                                <button className={style.button1}
                                    onClick={() => handleEditClick(elem)}> Edit Text
                                </button>   
                                <button style={{fontSize: "20px"}}
                                    onClick={() => deleteData(elem.id)}> ❌
                                </button>
                                </li>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}
export default ShowText;