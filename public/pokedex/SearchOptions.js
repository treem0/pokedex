import Component from '../Component.js';

class SearchOptions extends Component {
    renderHTML() {
        return /*html*/`
        
            <form class="search-form">
                <input class="pokemon-name-search" placeholder="Pokemon Name">
                <input class="pokemon-attack-search" placeholder="Pokemon Attack">
                <input class="pokemon-defense-search" placeholder="Pokemon Defense">
                <h2>Type: <select class="pokemon-type-dropdown"></h2>
                    <option>All</option>
                    <option>Water</option>
                    <option>Fire</option>
                    <option>Grass</option>
                </select>
            <button>Find</button>
        </form>
    
    `;
    }
}

export default SearchOptions;