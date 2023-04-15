import React, { useState } from "react";
import style from './MatchNumber.module.css'

const randomNumber = Math.round(Math.random() * 100);

const MatchNumber = () => {
    const [Data, setData] = useState('')
    const [Count, setCount] = useState(0)
    const [Status, setStatus] = useState("")

    const clickHandler = () => {
        console.log(randomNumber)
        setCount(Count + 1);
        if (randomNumber > Data) {
            alert("you guessed a smaller number")
            setData("");
        }
        else if (randomNumber < Data) {
            alert("you guessed a bigger number")
            setData("");
        }
        else {
            setStatus(`congratulations you guessed the right number in ${Count} attempts`)
            setData("");
        }
    };

    return (
        <div className={style.container}>
            <h1>Guess a number between 1 to 100 </h1>
            <h3>The number of attempts {Count}</h3>
            <input
                className={style.input}
                type="number"
                placeholder="Guess Lucky Number ..."
                value={Data}
                onChange={(e) => { setData(e.target.value) }}
            />
            <input type="button" className={style.btn}
            value="MatchNumber" onClick={clickHandler} />
            <h2>{Status}</h2>
        </div>
    )
}

export default MatchNumber;