import React from "react";
import style from './Homepage.module.css';
import { FaArrowCircleRight } from "react-icons/fa";

const Homepage = () => {
    return (
        <div>
            <h2>Welcome to home page</h2>
            <div className={style.Homepage}>
                <h3>SMALL STEPS LEAD TO LASTING CHANGES </h3>
                <h4>From a Quick Reset to a Healthy Daily Habit, Feel Great and Stay on Track</h4>
                <div className={style.wrapper}>
                    <button className={style.btn}>MAKE YOUR OWN JUICE SUBSCRIPTION </button>
                    <FaArrowCircleRight className={style.icon} />
                </div>
            </div>
        </div>
    )
}
export default Homepage;