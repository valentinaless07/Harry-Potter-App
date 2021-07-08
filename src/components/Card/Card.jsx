import React from "react"
import style from "./Card.module.css"
import { Link } from "react-router-dom"

export default function Card({ name, house, actor, image, species, id }) {
    
    return (
        <Link to={"/character/" + name}>
        <div className={style.scene} >

            <div className={style.card}>
                <div className={style.front}>
                    <img src={image} alt="" className={style.img} />
                </div>

                <div className={style.back}>

                    <h1 className={style.data_title}>{name}</h1>

                    <p className={style.data}>House: {house}</p>
                    <p className={style.data}>Actor: {actor}</p>
                    <p className={style.data}>Species: {species}</p>

                </div>


            </div>

        </div>
        
        </Link>

    )
}