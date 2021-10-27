import React from "react"
import Card from "../Card/Card"
import style from "./Cards.module.css"

export default function Cards(characters) {
    
    const state = {
        key: 0
    }

    return (
        
        <div className={style.cards_container}>
            {characters.characters.map(e => e.image.length > 0 && <Card name={e.name} house={e.house} actor={e.actor} image={e.image} species={e.species} key={state.key += 1}/>)
            
            }

        </div>
    )

    
}