import React from "react";
import { Link } from "react-router-dom";
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <>
            <div className={style.box} >
                <h1 className={style.header}>Juicecult</h1>
                <div className={style.Links}>
                    <Link  to={'/'}>home</Link>
                    <Link  to={'/login'}>Login</Link>
                    <Link  to={'/aboutus'}>About Us</Link>
                    <Link  to={'/Register'}>Register</Link>

                </div>
            </div>

        </>
    )
}
export default Navbar;