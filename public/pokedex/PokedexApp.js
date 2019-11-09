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
        const paging = new Paging({ totalResults: 0 });
        listSection.appendChild(paging.renderDOM());

        const pokemonList = new PokemonList({ pokemons: [] });
        listSection.appendChild(pokemonList.renderDOM());
    
        async function loadPokemon() {
            const response = await getPokemon();
            const pokemon = response.Search;
            const totalResults = response.totalResults;
            pokemonList.update({ pokemons: pokemon });
            paging.update({ totalResults: totalResults });
        }

        loadPokemon();

        window.addEventListener('hashchange', () => {
            loadPokemon();
        })
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