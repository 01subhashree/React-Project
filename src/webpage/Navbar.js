import React from "react";
import { Link } from "react-router-dom";
import style from './Navbar.module.css'
import { AiFillSmile } from "react-icons/ai";

const Navbar = () => {
    return (
        <>
            <div className={style.wrapper} >
                <h1 className={style.header}>Your Website</h1>
                <div className={style.Links}>
                    <Link  to={'/'}>home</Link>
                    <Link  to={'/login'}>Login</Link>
                    <Link  to={'/Register'}>Resister</Link>
                </div>
                <div className={style.icon}>
                <AiFillSmile />
                </div>
            </div>

        </>
    )
}
export default Navbar;