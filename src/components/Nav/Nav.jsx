import React from "react"
import { NavLink } from "react-router-dom"
import icono from "../Nav/icono.png"
import { useState } from "react"
import style from "./Nav.module.css"




export default function Nav(props) {
    const [input, Setinput] = useState("")
    const [music, Setmusic] = useState("MUSIC ON")

    const onChange = (e) => {
        Setinput(e.target.value)
        
        if(!e.target.value){
            props.searchByName('')
            return
        }
        
        props.searchByName(e.target.value)
       
        
       

    }

    function changeMusic () {
        if(music === "MUSIC ON"){
            Setmusic("MUSIC OFF")
            document.getElementById("home_music").pause()
        }
        else{
            Setmusic("MUSIC ON")
            document.getElementById("home_music").play() 
        }
    }

    

    return(
        <div className={style.nav_container}>
            <NavLink to="/home" className={style.img_container}>
            <img src={icono} alt="" className={style.icono}/>
            </NavLink>
            <form className={style.form} >
                <input type="text" className={style.searchBar} onChange={onChange} name="search" placeholder=" Search Characters"/>
                
            </form>
            
            <h2 className={style.mute} onClick={changeMusic}>{music}</h2>

        </div>
    )
}