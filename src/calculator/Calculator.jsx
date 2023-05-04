import { useState, useEffect } from "react";
import ClalculatorBtn from "./CalculatorBtn";
import style from "./Calculator.module.css";

export default function Calculator() {
  const [prevValue, setPrevValue] = useState(null);
  const [nextValue, setNextValue] = useState("0");
  const [op, setOp] = useState(null);

  useEffect(() => {}, [op, nextValue, prevValue]);

  const CalculatorOperations = {
    "/": (firstValue, secondValue) => firstValue / secondValue,
    "*": (firstValue, secondValue) => firstValue * secondValue,
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
    "=": (firstValue, secondValue) => secondValue,
  };

  const performOperation = () => {
    let temp = CalculatorOperations[op](
      parseFloat(prevValue),
      parseFloat(nextValue)
    );
    setOp(null);
    setNextValue(String(temp));
    setPrevValue(null);
  };

  const handleNum = (number) => {
    setNextValue(nextValue === "0" ? String(number) : nextValue + number);
  };

  const insertDot = () => {
    if (!/\./.test(nextValue)) {
      setNextValue(nextValue + ".");
    }
  };
  const percentage = () => {
    setNextValue(parseFloat(nextValue) / 100);
    if (prevValue && nextValue === "") {
      setPrevValue(parseFloat(prevValue) / 100);
    }
  };
  const changeSign = () => {
    setNextValue(parseFloat(nextValue) * -1);
  };
  const clearData = () => {
    setNextValue("0");
    setPrevValue(0);
  };

  const handleOperation = (value) => {
    if (Number.isInteger(value)) {
      handleNum(parseInt(value, 10));
    } else if (value in CalculatorOperations) {
      if (op === null) {
        setOp(value);
        setPrevValue(nextValue);
        setNextValue("");
      }
      if (op) {
        setOp(value);
      }
      if (prevValue && op && nextValue) {
        performOperation();
      }
    } else if (value === "c") {
      clearData();
    } else if (value === "\xB1") {
      changeSign();
    } else if (value === ".") {
      insertDot();
    } else if (value === "%") {
      percentage();
    }
  };

  return (
    <div className={style.calculator}>
      <span className={style.result}>
        {prevValue}
        {op}
        {nextValue}
      </span>

      <span className={style.CalculatorBtn}>
        <ClalculatorBtn Value={"c"} onClick={handleOperation} />
        <ClalculatorBtn Value={"\xB1"} onClick={handleOperation} />
        <ClalculatorBtn Value={"%"} onClick={handleOperation} />
        <ClalculatorBtn Value={"/"} onClick={handleOperation} />
        <ClalculatorBtn Value={7} onClick={handleOperation} />
        <ClalculatorBtn Value={8} onClick={handleOperation} />
        <ClalculatorBtn Value={9} onClick={handleOperation} />
        <ClalculatorBtn Value={"*"} onClick={handleOperation} />
        <ClalculatorBtn Value={4} onClick={handleOperation} />
        <ClalculatorBtn Value={5} onClick={handleOperation} />
        <ClalculatorBtn Value={6} onClick={handleOperation} />
        <ClalculatorBtn Value={"-"} onClick={handleOperation} />
        <ClalculatorBtn Value={1} onClick={handleOperation} />
        <ClalculatorBtn Value={2} onClick={handleOperation} />
        <ClalculatorBtn Value={3} onClick={handleOperation} />
        <ClalculatorBtn Value={"+"} onClick={handleOperation} />
        <span className={style.zero}>
          <ClalculatorBtn Value={0} onClick={handleOperation} />
        </span>
        <ClalculatorBtn Value={"."} onClick={handleOperation} />
        <ClalculatorBtn Value={"="} onClick={handleOperation} />
      </span>
    </div>
  );
}
