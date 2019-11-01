import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
        <section>
        <header>
            <img class="logo" src="../assets/pokeball.png" alt="cool pokemon pic">
            <h1>Pokedex</h1>
        </header>
        <nav>
            <a href="../">Home</a>
            <a href="../pokedex/index.html">Pokedex</a>
        </nav>
        </section>
        `;
    }
}

export default Header;