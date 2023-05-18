import { useState } from "react";
import { GiFastBackwardButton, GiFastForwardButton } from "react-icons/gi";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import style from "./Counter.module.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className={style.mainDiv}>
      <BsFillCaretUpFill
        onClick={() => setCount(count + 1)}
        className={style.icons1}
      />
      {/* <span className={style.Div}> */}
      <GiFastBackwardButton
        onClick={() => setCount(count - 10)}
        className={style.icons2}
      />
      <p className={style.para}>{count}</p>
      <GiFastForwardButton
        onClick={() => setCount(count + 10)}
        className={style.icons3}
      />
      {/* </span> */}
      <BsFillCaretDownFill
        onClick={() => setCount(count - 1)}
        className={style.icons4}
      />
    </div>
  );
}
