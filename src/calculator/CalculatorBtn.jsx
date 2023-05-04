import style from "./Calculator.module.css";
export default function ClalculatorBtn(props) {
  return (
    <>
      <button className={style.btns} onClick={() => props.onClick(props.Value)}>
        {props.Value}{" "}
      </button>
    </>
  );
}
