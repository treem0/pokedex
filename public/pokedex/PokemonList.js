import Component from '../Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {

    onRender(dom){
        const pokemon = this.props.pokemon;

        pokemon.forEach(poke => {
            const props = { poke };
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