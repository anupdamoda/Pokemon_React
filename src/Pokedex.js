import React, {Component} from 'react';
import PokeCard from './PokeCard';

class Pokedex extends Component {
    static defaultProps = {
        pokemon : [
            { id: 4, name: 'Charmander', type: 'fire', exp: 62 },
            { id: 7, name:' Squirtle', type: 'water', exp: 62 },
            { id: 11, name: 'Metapod', type: 'bug', exp: 62 },
            { id: 12, name: 'Butterfree', type: 'flying', exp: 62 },
            { id: 25, name: 'Pikachu', type: 'electric', exp: 62 }
        ]
    };
    render() {
        return (
            <div className="Pokedex">
                <h1>Pokedex!</h1>
                {this.props.pokemon.map((p) => (
                    <PokeCard id={p.id} name={p.name} type={p.type} exp={p.exp} />
                ))}
            </div>
        )        
    }
}

export default Pokedex;