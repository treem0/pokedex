import Component from '../Component.js';

class SearchOptions extends Component {

    onRender(form) {
        const searchInput = form.querySelector('input[name=search]');
        const typeRadios = form.querySelectorAll('input[name=type]');

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchInput.value = searchParams.get('s') || '';

            const type = searchParams.get('type');
            if (type) {
                typeRadios.forEach(typeRadios => {
                    typeRadios.checked = typeRadios.value === type;
                });
            }
        }

        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        })

        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);

            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchParams.set('type', formData.get('type'));
            searchParams.set('s', formData.get('search'));
            searchParams.set('page', 1);

            window.location.hash = searchParams.toString();
        });
    }
    
    
    renderHTML() {
        return /*html*/`
        
            <form class="search-form">
                <label for="search">
                    Search:
                </label>
                <p>
                    <input id="search" name="search">
                </p>
                <fieldset class="type">
                    <input class="pokemon-name-search" type="radio" name="type" value="name" checked placeholder="Pokemon Name">
                    <input class="pokemon-attack-search" type="radio" name="type" value="attack">
                    <input class="pokemon-defense-search" placeholder="Pokemon Defense" type="radio" name="type" value="defense">
                </fieldset>
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