import Component from '../Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {

    onRender(dom){
        const pokemons = this.props.pokemons;

        pokemons.forEach(pokemon => {
            const props = { pokemon: pokemon };
            const pokemonItem = new PokemonItem(props);
            const pokmonItemDOM = pokemonItem.renderDOM();
            dom.appendChild(pokmonItemDOM);
        })
    }

    renderHTML() {
        return /*html*/`
        <ul class="pokemons">
        </ul>
    `;
    }
}

export default PokemonList;