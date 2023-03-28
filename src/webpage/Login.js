import React from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import style from './Login.module.css'


const Loginpage = () => {
    return (
        <div className={style.wrapper}>
            <div>
                <MdAccountCircle className={style.icons} />
            </div>
            <div className={style.container1}>
                <div className={style.container2}>

                    <input placeholder="Username" className={style.input}
                    />
                    <input type="password" placeholder="Password" />
                    <div className={style.box}>
                        <button className={style.Button}>Login</button>
                        <span>
                            <h4>Do you have an account ?</h4>
                            <Link to={'/Register'}>Resister</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Loginpage