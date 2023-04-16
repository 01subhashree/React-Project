import { taskListAtom } from '../atom.js'
import { useRecoilState } from 'recoil';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import style from './Homepage.module.css'


const HomePage = () => {

    const navigate = useNavigate();

    const [data, setData] = useState("")
    const [addTodos, setAddTodos] = useRecoilState(taskListAtom)

    const clickHandle = () => {
        if (data !== '') {
            setAddTodos([...addTodos, data])
            setData("")
        }
    }

    const changePage = () => {
        navigate("./checktask")
    }

    return (
        <div className={style.wrapper}>
            <h1>HomePage</h1>
            <div className={style.container}>
                <div className={style.container2}>
                    <input placeholder="Enter tasks" value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                    <div>
                        <button className={style.button1}
                            onClick={clickHandle}>Add Task <span style={{ fontSize: "20px" }}> + </span>
                        </button>
                        <button className={style.button2}
                            onClick={changePage}>Check Task
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;