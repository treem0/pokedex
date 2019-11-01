import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {
        return /*html*/`
        <li class="single-pokemon-card">
            <img class="pokemon-image" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png">
            <p class="pokemon-name">Name: venusaur</p>
            <p class="pokemon-type1">Type1: grass</p>
            <p class="pokemon-type2">Type2: poison</p>
            <p class="pokemon-attack">Attack: 82</p>
        </li>
        `;
    }
}

export default PokemonItem;