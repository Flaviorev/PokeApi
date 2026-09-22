import "./PokemonCard.css";

/**
 * Recebe o objeto inteiro `pokemon` (como está no seu App.jsx) e a função
 * `onCardClick` para abrir o modal de detalhes.
 *
 * pokemon: { id, name, types, image, height, weight, ability }
 */
export default function PokemonCard({ pokemon, onCardClick }) {
  const { id, name, types, image, height, weight, ability } = pokemon;
  const paddedId = String(id).padStart(3, "0");

  return (
    <div className="pokemon-card" onClick={() => onCardClick && onCardClick(pokemon)}>
      <div className="pokemon-card-inner">
        {/* FRENTE */}
        <div className="pokemon-card-front">
          <span className="pokemon-id">#{paddedId}</span>
          <img className="pokemon-image" src={image} alt={name} />
          <h3 className="pokemon-name">{name}</h3>
          <div className="pokemon-types">
            {types.map((type) => (
              <span key={type} className={`type-badge type-${type.toLowerCase()}`}>
                {type.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        {/* VERSO (aparece ao passar o mouse) */}
        <div className="pokemon-card-back">
          <h3 className="pokemon-name">{name}</h3>
          <ul className="pokemon-stats">
            <li>
              <span>Altura</span>
              <span className="stat-value">{height} m</span>
            </li>
            <li>
              <span>Peso</span>
              <span className="stat-value">{weight} kg</span>
            </li>
            <li>
              <span>Habilidade</span>
              <span className="stat-value">{ability}</span>
            </li>
            <li>
              <span>Tipo</span>
              <span className="stat-value">{types.join(" / ")}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}