import React from "react"
import style from "../Prev/Prev.module.css"
import { Link } from "react-router-dom"

function playMusic () {
    document.getElementById("home_music").play()
}

export default function Prev () {
    return (
        <div className={style.div}>
            <Link className={style.link} to="/home" onClick={playMusic}>
            <div className={style.btn}>
            <span className={style.text}>START</span>
            </div>
            </Link>
        </div>
    )
}