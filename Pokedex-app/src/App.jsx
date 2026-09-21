import { useState } from 'react';
import { Header } from './Header.jsx';
import { Pokemoncard } from './PokemonCard.jsx';

const pokemons = [
    {
        id: 1,
        name: 'Bulbasaur',
        types: ['GRASS', 'POISON'],
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        height: 0.7,
        weight: 6.9,
        ability: 'Overgrow',
    },
    {
        id: 4,
        name: 'Charmander',
        types: ['FIRE'],
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
        height: 0.6,
        weight: 8.5,
        ability: 'Blaze',
    },
    {
        id: 7,
        name: 'Squirtle',
        types: ['WATER'],
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
        height: 0.5,
        weight: 9.0,
        ability: 'Torrent',
    },
];

function App() {
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    return (
        <>
            <Header />
            <div className="pokedex-container">
                {pokemons.map((p) => (
                    <Pokemoncard
                        key={p.id}
                        pokemon={p}
                        onCardClick={setSelectedPokemon}
                    />
                ))}
            </div>

            {selectedPokemon && (
                <div
                    className="modal-overlay"
                    onClick={() => setSelectedPokemon(null)}
                >
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modal-close"
                            onClick={() => setSelectedPokemon(null)}
                        >
                            ✕
                        </button>

                        <span className="perfil-cabecalho">
                            #{String(selectedPokemon.id).padStart(3, '0')}
                        </span>
                        <h2>{selectedPokemon.name}</h2>
                        <p className="perfil-tipo">
                            {selectedPokemon.types.join(' / ')}
                        </p>

                        <img
                            src={selectedPokemon.image}
                            alt={`Imagem do Pokémon ${selectedPokemon.name}`}
                            className="modal-image"
                        />

                        <ul className="modal-details">
                            <li><strong>Altura:</strong> {selectedPokemon.height} m</li>
                            <li><strong>Peso:</strong> {selectedPokemon.weight} kg</li>
                            <li><strong>Habilidade:</strong> {selectedPokemon.ability}</li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;