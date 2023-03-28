import React from "react";
import style from './Homepage.module.css';
import { SlOptions } from "react-icons/sl";
import Navbar from './Navbar.js';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <img className={style.image} src="https://minervainfotech.com/blog/wp-content/uploads/2019/09/Untitled-6-1920x1280.jpg" alt="image" />
            <div className={style.Homepage}>
                <p>The UI/UX Design Specialization brings a design-centric approach to user interface and user experience design, and offers practical, skill-based instruction centered around a visual communications perspective, rather than on one focused on marketing or programming alone. In this sequence of four courses, you will summarize and demonstrate all stages of the UI/UX development process, from user research to defining a project's strategy, scope, and information architecture, to developing sitemaps and wireframes. You'll learn current best practices and conventions in UX design and apply them to create effective and compelling screen-based experiences for websites or apps.</p>
                <div className={style.wrapper}>
                    <button className={style.btn}>Learn More</button>
                    <SlOptions className={style.icon} />
                </div>
            </div>
        </div>
    )
}
export default Homepage;