import PokedexApp from '../pokedex/PokedexApp.js';

const app = new PokedexApp();
const dom = app.renderDOM();
document.body.prepend(dom);