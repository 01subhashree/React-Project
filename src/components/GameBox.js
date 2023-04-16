import React, { useState } from "react";
import Square from "./Square.js";
import './GameBox.css'
 
export default function Gamebox() {
    const [data, setData] = useState(Array(9).fill(null))
    const [input, setInput] = useState(true)
    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (data[a] !== null && data[a] === data[b] && data[a] === data[c]) {
                return data[a];
            }
        }
        return false;
    };
    const isWinner = checkWinner();
    const onClickHandler = (index) => {
        const updateValue = [...data];
        updateValue[index] = input ? "X" : "O";
        setData(updateValue);
        setInput(!input);
    }

    const resetHandler = () => {
        setData(Array(9).fill(null));
    }
    return (

        <div className="Wrapper">
            <p>

                {isWinner ? (
                    <>
                        <h2> {isWinner} won the game </h2>
                        <button className="btn" onClick={resetHandler} >Reset</button>
                    </>
                ) : (<button className="btn" onClick={resetHandler} >ReStrat</button>)}
            </p>
            <>

                <div className="rows">
                    <Square onClick={() => onClickHandler(0)} value={data[0]} />
                    <Square onClick={() => onClickHandler(1)} value={data[1]} />
                    <Square onClick={() => onClickHandler(2)} value={data[2]} />
                </div>
                <div className="rows">
                    <Square onClick={() => onClickHandler(3)} value={data[3]} />
                    <Square onClick={() => onClickHandler(4)} value={data[4]} />
                    <Square onClick={() => onClickHandler(5)} value={data[5]} />
                </div>
                <div className="rows">
                    <Square onClick={() => onClickHandler(6)} value={data[6]} />
                    <Square onClick={() => onClickHandler(7)} value={data[7]} />
                    <Square onClick={() => onClickHandler(8)} value={data[8]} />
                </div>
            </>
        </div>
    )
}