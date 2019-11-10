import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {
        const poke = this.props.poke;
        
        return /*html*/`
        <li class="single-pokemon-card">
            <img class="pokemon-image" src=${poke.url_image}>
            <p class="pokemon-name">Name: ${poke.pokemon}</p>
            <p class="pokemon-type1">Type1: ${poke.type_1}</p>
            <p class="pokemon-type2">Type2: ${poke.type_2}</p>
            <p class="pokemon-attack">Attack: ${poke.attack}</p>
        </li>
        `;
    }
}

export default PokemonItem;