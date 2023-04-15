import { useState } from "react";
import style from './Greeting.module.css';

const Greetings = () => {
    const data = [
        "Good morning",
        "Happy New Year",
        "Good afternoon",
        "Good Night"
    ]
    const [greetings, setGreetings] = useState(0)
    const newGreeting = () => {
        setGreetings(greetings + 1);
    }

    return(
        <>
            <button className={style.Button}  onClick={newGreeting}>Greeting Change</button>
            <h1>{data[greetings]}</h1>
        </>
    )
}
export default Greetings;