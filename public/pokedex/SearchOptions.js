import Component from '../Component.js';

class SearchOptions extends Component {
    onRender(form) {
        const searchInput = form.querySelector('input[name=search]');
        const typeRadios = form.querySelectorAll('input[name=sort]');

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            searchInput.value = searchParams.get('pokemon') || searchParams.get('attack') || searchParams.get('defense') || '';

            const sort = searchParams.get('sort');
            if (sort) {
                typeRadios.forEach(typeRadios => {
                    typeRadios.checked = typeRadios.value === sort;
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

            const queryString = '';
            const searchParams = new URLSearchParams(queryString);

            searchParams.set(formData.get('sort'), formData.get('search'));
            searchParams.set('page', 1);

            window.location.hash = searchParams.toString();
        });
    }
    
    
    renderHTML() {
        return /*html*/`
        
            <form class="options">
                <label for="search">
                    Search:
                </label>
                <p>
                    <input id="search" name="search">
                </p>
                <fieldset class="type">
                    <label>
                        <input type="radio" name="sort" value="name" checked>
                        Name
                    </label>
                    <label>
                        <input type="radio" name="sort" value="attack">
                        Attack
                    </label>
                    <label>
                        <input type="radio" name="sort" value="defense">
                        Defense
                    </label>
                </fieldset>
            <button>Find</button>
        </form>
    
    `;
    }
}

export default SearchOptions;