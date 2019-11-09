import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {
        const pokemon = this.props.pokemons;
        console.log(pokemon);
        

        return /*html*/`
        <li class="single-pokemon-card">
            <img class="pokemon-image" src=${pokemon.url_image}>
            <p class="pokemon-name">Name: ${pokemon.pokemon}</p>
            <p class="pokemon-type1">Type1: ${pokemon.type_1}</p>
            <p class="pokemon-type2">Type2: ${pokemon.type_2}</p>
            <p class="pokemon-attack">Attack: ${pokemon.attack}</p>
        </li>
        `;
    }
}

export default PokemonItem;