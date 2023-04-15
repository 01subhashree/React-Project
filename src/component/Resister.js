import React from "react";
import { Link } from "react-router-dom";
import style from './Resister.module.css';

const Resister = () => {
    return (
        <div className={style.MainDiv}>
            <h2>Welcome to home page</h2>
            <div className={style.ChildDiv}>
                <div>
                    <input placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <div>
                        <button className={style.button}>Register</button>
                    </div>
                    <span className={style.Link} >
                        <p>Do you have an account ?</p>
                        <Link to={'/login'} style={{ marginTop: "20px" }}>Login</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Resister;