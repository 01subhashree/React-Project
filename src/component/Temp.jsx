import React, { useState } from "react";
import style from "./Temp.module.css";

export default function Temp() {
  const [temp, setTemp] = useState(10);

  let color = "rgb(17, 111, 205)";
  if (temp >= 20 && temp <= 30) {
    color = "yellow";
  } else if (temp > 30 && temp <= 50) {
    color = "orange";
  } else if (temp > 50) {
    color = "red";
  }

  return (
    <div className={style.mainBox}>
      <div className={style.display} style={{ backgroundColor: color }}>
        <p>{temp}&#176;C</p>
      </div>
      <div className={style.controls}>
        <button className={style.btn} onClick={() => setTemp(temp + 1)}>
          +
        </button>
        <button className={style.btn} onClick={() => setTemp(temp - 1)}>
          -
        </button>
      </div>
    </div>
  );
}
