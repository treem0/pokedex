import Component from '../Component.js';
import Header from '../common/header.js';
import SearchOptions from './SearchOptions.js';
import Paging from './Paging.js';
import PokemonList from './PokemonList.js';
import { getPokemon } from '../data/pokemon-api.js';

class PokedexApp extends Component {

    async onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const searchSection = dom.querySelector('.search-section');
        const searchOptions = new SearchOptions();
        searchSection.prepend(searchOptions.renderDOM());

        const listSection = dom.querySelector('.pokemons');
        const paging = new Paging();
        listSection.appendChild(paging.renderDOM());

        const pokemonList = new PokemonList({ pokemon: [] });
        listSection.appendChild(pokemonList.renderDOM());

        const pokemon = await getPokemon();
        const results = pokemon.results;

        pokemonList.update({ pokemon: results });
    }

    renderHTML() {
        return /*html*/`
        <div class="grid-container">
    <header>
    </header>
    <nav>
    </nav>
    <section class="search-section">
    </section>

    <main>
        <section class="paging-section">
        </section>
        <ul class="pokemons">
        </ul>
    </main>
    `;
    }
}

export default PokedexApp;