import React from "react";
import style from './Resister.module.css'
import { Link } from "react-router-dom";

const Resister = () => {
    return (
        <div className={style.Box}>
            <div className={style.ChildBox}>
                <div>
                    <input placeholder="Username" className={style.input1} />
                    <input type="email" placeholder="Email" className={style.input2} />
                    <input type="password" placeholder="Password" />
                    <div>
                        <button className={style.button}>Register</button>
                    </div>
                    <span className={style.Gbox} >
                        <p>Do you have an account ?</p>
                        <Link to={'/login'} style={{ marginTop: "20px" }}>Login</Link>
                    </span>
                    <span>
                        <Link to={'/'}>home</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Resister;