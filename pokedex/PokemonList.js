import Component from '../Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {

    onRender(dom){
        const pokemonItem = new PokemonItem();
        dom.prepend(pokemonItem.renderDOM());
    }

    renderHTML() {
        return /*html*/`
        <ul class="pokemons">
            <li class="single-pokemon-card"></li>
            <li class="single-pokemon-card"></li>
            <li class="single-pokemon-card"></li>
            <li class="single-pokemon-card"></li>
            <li class="single-pokemon-card"></li>
        </ul>
    `;
    }
}

export default PokemonList;