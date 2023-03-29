import React, { useState,useRef } from 'react';
import QuestionsData from './QuestionsData';
import NextQuestion from './NextQuestion'
import SubmitBtn from './SubmitBtn';
import style from './Quiz.module.css';
import QuizResult from './QuizResult';


const Quiz = () => {

    const [count, setCount] = useState(1);
    const [currentQs, setCurrentQs] = useState(0);
    const [data, setData] = useState(true)
    const [clicked, setClicked] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const score = useRef(0)

    const changeQuestions = () => {
        updateScore();
        return (
            setCurrentQs(currentQs + 1),
            setCount(count + 1),
            setClicked(0)
        )
    }

    const submitHandler = () => {
        updateScore();
        return (
            setShowResult(true)
        )
    }

    const updateScore = () => {
        if (clicked === QuestionsData[currentQs].CorrectAnswer) {
            score.current  += 2;
            setData(!data)
        }
    }

    const restartHandler = () => {
        setShowResult(false)
        setClicked(0)
        setCurrentQs(0)
        setCount(1)
        score.current = 0
    }
    return (
        <div className={style.Container}>
            {showResult ? <QuizResult score={score.current} restartHandler={restartHandler} /> :
                <>
                    <div className={style.wrapper} >
                        <h1>Question ({count})</h1>
                        <h2>{QuestionsData[currentQs].Question} </h2>
                        <div>
                            <ol type='a'>{QuestionsData[currentQs].Options.map((data, index) => {
                                return (
                                    <li key={index}>
                                        <button className={style.button} onClick={() => setClicked(index + 1)}>{data}</button>
                                    </li>
                                )
                            })}
                            </ol>
                        </div>
                        {currentQs < QuestionsData.length - 1 ? <NextQuestion changeQuestions={changeQuestions} />
                            : <SubmitBtn submitHandler={submitHandler} />}
                    </div>
                </>
            }
        </div >
    )
}
export default Quiz;