import { useState } from "react";
import style from './Table.module.css'

const Table = () => {
  const [number, setNumber] = useState([2, 5]);
  const changeNumber = () => {
    setNumber([...number, Math.round(Math.random() * 100)]);
    console.log(number);
  };
  return (
    <>
      <table className={style.table}>
        <thead >
          <tr>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
            {number.map((elem, index) => (
                <tr key={index}>
                  <td>{elem}</td>
                </tr>
            ))}
        </tbody>
      </table>
      <button className={style.button} onClick={changeNumber}>Generate Number</button>
    </>
  );
};
export default Table;
