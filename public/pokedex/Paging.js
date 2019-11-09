import Component from '../Component.js';

class Paging extends Component {

    onRender(dom) {
        const prevButton = dom.querySelector('.prev');
        const nextButton = dom.querySelector('.next');

        if(!prevButton) {
            return;
        }

        let page = 1;

        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            const parsedPage = parseInt(searchParams.get('page'));
            if (isNaN(parsedPage)) {
                page = 1;
            }
            else {
                page = parsedPage;
            }
        }
        updateControls();
        
        window.addEventListener('hashchange', () => {
            updateControls();
        });

        function updatePage(increment) {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);
            searchParams.set('page', page + increment);

            window.location.hash = searchParams.toString();
        }

        prevButton.addEventListener('click', () => {
            updatePage(-1);
        });
        nextButton.addEventListener('click', () => {
            updatePage(1);
        });

    }

    renderHTML() {
        const perPage = 20;
        const totalResults = this.props.totalResults;
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);

        let page = 1;
        const parsedPage = parseInt(searchParams.get('page'));
        if(isNaN(parsedPage)) {
            page = 1;
        }
        else {
            page = parsedPage;
        }

        if (!totalResults) {
            return /*html*/`
            <p class="paging-section">No results, try again</p>
            `;
        }

        const lastPage = Math.ceil(totalResults / perPage);


        return /*html*/`
        <section class="paging-section">
            <button class="prev" ${page === 1 ? 'disabled' : ''}>⇦</button>
            <span>Page ${page} of ${lastPage}</span>
            <button class="next" ${page === lastPage ? 'disabled' : ''}>⇨</button>
        </section>
    `;
    }

}

export default Paging;