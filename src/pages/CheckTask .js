import { taskListAtom } from '../atom'
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import style from './CheckTask.module.css'

const CheckTask = () => {
    const todos = useRecoilValue(taskListAtom)
    return (
        <div className={style.Gbox}>
            <h1>Tasks to do !</h1>
            <div className={style.Cbox}>
            {todos.map((elem, index) => (
                <li key={index}>
                    {elem}
                </li>
            ))}
            </div>
            <Link to={"/"}>Go back to HomePage</Link>
        </div>
    )
}
export default CheckTask;