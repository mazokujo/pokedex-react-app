import React, { Component } from 'react';
import './Pokecard.css'
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component {
    render() {
        const { id, name, type, base_experience } = this.props
        let imgSrc = `${POKE_API}${id}.png`
        return (
            <div className="Pokecard">
                <h1>{name}</h1>
                <img src={imgSrc} alt={name}></img>
                <div>{type}</div>
                <div>{base_experience}</div>
            </div>
        )
    }
}

export default Pokecard