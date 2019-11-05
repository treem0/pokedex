import Component from '../Component.js';

class Paging extends Component {
    renderHTML() {
        return /*html*/`
        <section class="paging-section">
            <button href="">Back</button>
            <span>Page 1 of 5</span>
            <button href="">Next</button>
        </section>
    `;
    }

}

export default Paging;