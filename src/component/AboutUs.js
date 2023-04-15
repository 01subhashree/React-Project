import React from "react";
import style from './AboutUs.module.css'

const AboutUs = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.ChildDiv}>
                <h3>Welcome to home page</h3>
                <h1>About Our Founder </h1>

                <h3>welcome to the World of Cult Juicing </h3>
                <div className={style.Div}>
                    <p style={{ fontSize: "20px" }}>"I started my career in hotel management and visited different countries
                        like Bangkok, Turkey, and Abu Dhabi to experience the food and juice there.
                        I brought their technology to India to help people who are facing health
                        issues like Diabetes, Blood Pressure, etc. Our motive was to make customized
                        juice according to them, As at one point in time I suffered from TB and I
                        treated myself with my Own handmade juices. So, I thought I should take my juice to people's homes according to their Customization.
                        Then I started JUICE CULT in 2019 AS A GLOBALLY CERTIFIED JUICE THERAPIST and
                        Today we have many varieties of juice servicing all over Delhi. Our Machines
                        are completely different as they are clean and Hygienic"
                    </p>
                    <img src="https://juicecult.in/wp-content/uploads/2022/06/certificate.png.webp" alt="certificate" className={style.image} />
                </div>
                <h4>JATIN YOUR JUICE CHEF </h4>
            </div>
        </div>
    )
}
export default AboutUs;