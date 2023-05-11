import { useState, useEffect } from "react";
import style from "./Timer.module.css";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minute, setMinute] = useState(0);

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinute(minute + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const restartHandler = () => {
    setSeconds(0);
    setMinute(0);
  };

  function stopHandler() {
    clearInterval(timer);
  }
  return (
    <div className={style.css}>
      <h1>Timer</h1>
      <h2>
        {minute}:{seconds}
      </h2>
      <span className={style.button}>
        <button onClick={restartHandler}>Restate</button>
        <button onClick={stopHandler}>Stop</button>
      </span>
    </div>
  );
}
