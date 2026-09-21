import { useState } from 'react';
import './PokemonCard.css';

export function Pokemoncard({ pokemon, onCardClick }) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <article
            className="Pokedex-card"
            onClick={() => onCardClick(pokemon)}
        >
            <header className="Pokedex-card-header">
                <span className="perfil-cabecalho">
                    #{String(pokemon.id).padStart(3, '0')}
                </span>
                <h2 className="perfil-id">{pokemon.name}</h2>
                <p className="perfil-tipo">{pokemon.types.join(' / ')}</p>
            </header>
            <figure
             className="Perfil-foto-conteiner"
            onMouseEnter={(e) => { e.stopPropagation(); setShowInfo(true); }}
                onMouseLeave={(e) => { e.stopPropagation(); setShowInfo(false); }}
    onClick={() => onCardClick(pokemon)}
>
            
                <img
                    src={pokemon.image}
                    alt={`Imagem do Pokémon ${pokemon.name}`}
                    className="Perfil-foto"
                />

                {showInfo && (
                    <div className="perfil-tooltip">
                        <p><strong>Altura:</strong> {pokemon.height} m</p>
                        <p><strong>Peso:</strong> {pokemon.weight} kg</p>
                        <p><strong>Habilidade:</strong> {pokemon.ability}</p>
                    </div>
                )}
            </figure>

            <ul className="perfil-skills">
                <li className="skill-badge skill-react">React</li>
                <li className="skill-badge skill-css">CSS</li>
            </ul>
        </article>
    );
}