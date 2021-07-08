import React from "react"
import { NavLink } from "react-router-dom"
import icono from "../Nav/icono.png"
import { useState } from "react"
import style from "./Nav.module.css"



export default function Nav(props) {
    const [input, Setinput] = useState("")

    const onChange = (e) => {
        Setinput(e.target.value)
        props.searchByName(input)
        props.history.push('/search')

    }

    

    

    return(
        <div className={style.nav_container}>
            <NavLink to="/" className={style.img_container}>
            <img src={icono} alt="" className={style.icono}/>
            </NavLink>
            <form className={style.form} >
                <input type="text" className={style.searchBar} onChange={onChange} name="search" placeholder=" Search Characters"/>
                
            </form>
            
            

        </div>
    )
}