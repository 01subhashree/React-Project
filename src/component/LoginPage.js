import React from "react";
import { Link } from "react-router-dom";
import style from './LoginPage.module.css';

const Loginpage = () => {

    return (
        <div className={style.wrapper}>
            <h2>Welcome to home page</h2>
            <div className={style.container1}>
                <div className={style.container2}>
                    <input placeholder="Username" className={style.input}
                    />
                    <input type="password" placeholder="Password"
                    />
                    <div className={style.box}>
                        <button className={style.Button}>Login</button>
                        <span>
                            <h4>Do you have an account ?</h4>
                            <Link to={'/Register'}>Resister</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Loginpage