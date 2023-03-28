import React from "react";
import style from './AboutUs.module.css';

const AboutUs = () => {

    const data = [
        {
            image: "https://www.functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fakash.664c63bdd41eafa7e31155df28e6f562.jpeg&w=640&q=75",
            name: "Akash Agarwal",
            position: "CEO & Founder"
        },
        {
            image: "https://www.functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fparul.655c88f2689a175479147ce4c9a5f155.jpeg&w=640&q=75",
            name: "Parul Mishra",
            position: "Product Manager"
        }, {
            image: "https://www.functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fsaurabh.ed5108e35e28de3fb2583f997239bb38.jpg&w=1080&q=75",
            name: "Sourabh Bagrecha",
            position: "Engineering Manager"
        },
        {
            image: "https://www.functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Faakansha.4e4c8f7a1acf2f68a094362e49d9dc64.jpg&w=1080&q=75",
            name: "Aakansha Jain",
            position: "VP of Marketing"
        },
        {
            image: "https://www.functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fakshay.b9e342a4bb8fe6e8dcda74a19ca8b187.jpg&w=1080&q=75",
            name: "Akshay Sharma",
            position: "Chief Architect"
        },
        {
            image: "https://www.functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fsaptarshi.0260a3c732c54764cf0cd22e82f588cd.jpg&w=1080&q=75",
            name: "Saptarshi Adhikery",
            position: "Senior Software Developer"
        }
    ]

    return (
        <div>
            <h3>The Team</h3>
            <h1>Meet our team of experts </h1>
            <p>To be the company our customers want us to be,it takes an eclectic group of
                passionate operators.Get to know the people leading the way at untitled.
            </p>
            <div className={style.container}>
                {data.map((datas) => {
                    return (
                        <div className={style.box} key={datas.name}>
                            <img className={style.Image} src={datas.image} alt="image" />
                            <h3>{datas.name}</h3>
                            <h4>{datas.position}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default AboutUs;