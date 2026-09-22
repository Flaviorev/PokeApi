import { useState } from 'react';
import { Header } from './Header.jsx';
import Pokemoncard from './PokemonCard.jsx';

const pokemonsAntigos = [
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
  {
    id: 25,
    name: 'Pikachu',
    types: ['ELECTRIC'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    height: 0.4,
    weight: 6.0,
    ability: 'Static',
  },
  {
    id: 94,
    name: 'Gengar',
    types: ['GHOST', 'POISON'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png',
    height: 1.5,
    weight: 40.5,
    ability: 'Cursed Body',
  },
  {
    id: 133,
    name: 'Eevee',
    types: ['NORMAL'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png',
    height: 0.3,
    weight: 6.5,
    ability: 'Run Away',
  },
];

const pokemonsNovaGeracao = [
  {
    id: 906,
    name: 'Sprigatito',
    types: ['GRASS'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/906.png',
    height: 0.4,
    weight: 4.1,
    ability: 'Overgrow',
  },
  {
    id: 908,
    name: 'Meowscarada',
    types: ['GRASS', 'DARK'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/908.png',
    height: 1.5,
    weight: 31.2,
    ability: 'Overgrow',
  },
  {
    id: 909,
    name: 'Fuecoco',
    types: ['FIRE'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/909.png',
    height: 0.4,
    weight: 9.8,
    ability: 'Blaze',
  },
  {
    id: 911,
    name: 'Skeledirge',
    types: ['FIRE', 'GHOST'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/911.png',
    height: 1.6,
    weight: 326.5,
    ability: 'Blaze',
  },
  {
    id: 912,
    name: 'Quaxly',
    types: ['WATER'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/912.png',
    height: 0.5,
    weight: 6.1,
    ability: 'Torrent',
  },
  {
    id: 914,
    name: 'Quaquaval',
    types: ['WATER', 'FIGHTING'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/914.png',
    height: 1.8,
    weight: 61.9,
    ability: 'Torrent',
  },
];

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <>
      <Header />

      <div className="geracoes-wrapper">
        <section className="geracao-coluna">
          <h2 className="geracao-titulo">
            <span className="pokebola-icon" />
            <span>Geração Antiga</span>
            <span className="geracao-sub">Kanto</span>
          </h2>
          <div className="pokedex-container">
            {pokemonsAntigos.map((p) => (
              <Pokemoncard key={p.id} pokemon={p} onCardClick={setSelectedPokemon} />
            ))}
          </div>
        </section>

        <section className="geracao-coluna">
          <h2 className="geracao-titulo">
            <span className="pokebola-icon" />
            <span>Nova Geração</span>
            <span className="geracao-sub">Paldea</span>
          </h2>
          <div className="pokedex-container">
            {pokemonsNovaGeracao.map((p) => (
              <Pokemoncard key={p.id} pokemon={p} onCardClick={setSelectedPokemon} />
            ))}
          </div>
        </section>
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
              ×
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