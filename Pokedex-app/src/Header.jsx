import './header.css';
export function Header(){
    return(
        <header className="Pokedex-header">
            <figure className="Pokedex-header-figure">
                <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="PokéAPI logo" />
            </figure>
            <h1 className="Pokedex-header-title">PokéAgenda</h1>
        </header>
    );
}