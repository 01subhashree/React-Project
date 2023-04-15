import { useState } from "react";
import style from './Event.module.css'

const Events = () => {

    const [events, setEvents] = useState([])

    const mouseInEvent = () => {
        const data1 = new Date().toLocaleString();
        setEvents([...events, { "time": data1 , "eventName": "move in" }]);
    }
    const mouseOutEvent = () => {
        const data2 = new Date().toLocaleString();
        setEvents([...events, { "time": data2 , "eventName": "move out" }]);
    }
    
    return(
        <>
            <h1 className={style.header1} onMouseOver={mouseInEvent} onMouseOut={mouseOutEvent}>Welcome</h1>
            <h2 className={style.header2} onMouseOver={mouseInEvent} onMouseOut={mouseOutEvent}>To Coding</h2>
            <div className={style.div} onMouseOver={mouseInEvent} onMouseOut={mouseOutEvent}>
                <p>World !</p>
            </div>
            <table className={style.table} >
                <thead>
                    <th>Events</th>
                    <th>Time & Date</th>
                </thead>
                <tbody>
                    {events.map((elem, index) => (
                        <tr key={index}>
                            <td>{elem.time}</td>
                            <td>{elem.eventName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default Events;