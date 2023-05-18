import QuoteData from "./ArrayData";
import { useState } from "react";
import style from "./ShowQuote.module.css";

export default function ShowQuote() {
  const [count, setCount] = useState(0);
  const handleChange = () => {
    setCount(Math.floor(Math.random() * 10));
  };
  return (
    <div className={style.mainDiv}>
      <span className={style.para}>{QuoteData[count].quote}</span>
      <p className={style.para}>-{QuoteData[count].by}</p>
      <button onClick={handleChange} className={style.btn}>
        Change Quote
      </button>
    </div>
  );
}
