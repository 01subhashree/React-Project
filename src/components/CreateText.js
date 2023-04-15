import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { inputData } from "./Atom";
import { useRecoilState } from 'recoil';
import style from './CreateText.module.css'

const CreateText = () => {


    const [task, setTask] = useRecoilState(inputData)
    const [data, setData] = useState("")
    
    const navigate = useNavigate()
    
    const AddTask = () => {
        if (data !== "") {
            const num = task.length + 1
            setTask([...task, { title: data, id: num }])
            setData("");
            console.log(task)
        }
    }


    return (
        <div className={style.Container}>
            <div className={style.Wrapper}>
                <h1>Create Task </h1> 
            </div>
            <div className={style.Wrapper2}>
                
                <input placeholder='Enter your text' value={data}
                    onChange={(e) => setData(e.target.value)} />
                <button className={style.btn1} onClick={AddTask}>Create</button>
            </div>
            <button className={style.btn2} onClick={()=>navigate("/inputdata")}>Show Task List</button>
        </div>
    )
}
export default CreateText;