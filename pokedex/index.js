import PokemonApp from '../pokedex/PokedexApp.js';

const app = new PokemonApp();
const dom = app.renderDOM();
document.body.prepend(dom);