import React, {Component} from 'react';
import './PokeCard.css'
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class PokeCard extends Component {
    render() {
        let imgsrc = `${POKE_API}${this.props.id}.png`;
        return (
            <div className="PokeCard">
                <h1>{this.props.name}</h1>
                <img src={imgsrc} alt={this.props.name} />
                <div>Type: {this.props.type}</div>
                <div>Exp: {this.props.exp}</div>
            </div>
        )        
    }
}

export default PokeCard