import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
    const [showMenubar, setShowMenubar] = useState(false);

    return (
        <nav className="Navbar">
            <div className="header">
                <i className="fa-brands fa-app-store" style={{ fontSize: "30px" }}></i>
                <h2>Onclick</h2>
            </div>
            <div className={showMenubar ? " mobile-menu-link" : "Menubar"}>
                <span>
                    <h3 >Home</h3>
                    <h3>Services</h3>
                    <h3 >Contact</h3>
                    <h3 >About Us</h3>
                </span>
                <div className="hamburger-icon">
                    <a href="#" onClick={() => setShowMenubar(!showMenubar)}>
                        <GiHamburgerMenu />
                    </a>
                </div>
            </div>
            {/* login / signup link */}
            <div className="Buttons">
                <div>
                    <span>
                        <a href="#" >Login</a>
                    </span>
                    <span >
                        <a href="#" >Sign Up</a>
                    </span>

                </div>
            </div>
        </nav>
    )
}