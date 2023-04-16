import React from 'react'
import style from "./Reactscroller.module.css"
import CardData from './CardData'

export default function Reactscroller() {

    return (
        <div className={style.Cards} >
            {CardData.map((card,id) => {
                return (
                    <div className={style.cardBox} key={id}>
                        <div className={style.cardImage}>
                            <img className={style.Images} src={card.image} />
                        </div>
                        <div className={style.cardtext}>
                            <p>{card.name}</p>
                            <p>{card.description}</p>
                            <p>{card.exprience}</p>
                        </div>

                    </div>
                )
            })}

        </div>
    )
}