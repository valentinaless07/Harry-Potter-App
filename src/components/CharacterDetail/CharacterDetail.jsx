import React from "react"
import style from "./CharacterDetail.module.css"





export default function CharacterDetail(props) {
    
    const character= props.characters.filter(el => el.name === props.name)
    console.log(character)
    return (

        <div className={style.container}>
        <div className={style.container_text}>
            <h1 className={style.title}>
                {character[0].name}
            </h1>
            <ul className={style.list}>

                <li>Actor: {character[0].actor}</li>
                <li>House: {character[0].house}</li>
                <li>Species: {character[0].species}</li>
                <li>Gender: {character[0].gender}</li>
                <li>Patronus: {character[0].patronus}</li>
                <li>Ancestry: {character[0].ancestry}</li>
                
            </ul>
            
            </div>
            <div className={style.container_img}>
            <img src={character[0].image} alt="" className={style.img}/>
            </div>
            </div>

        
    )
    
    
}