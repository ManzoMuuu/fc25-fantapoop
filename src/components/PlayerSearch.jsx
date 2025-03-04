import { useState } from 'react';
import { searchPlayers } from '../api/fc25Api';

export const PlayerSearch = ({ onAddPlayer }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const players = await searchPlayers(query);
    setResults(players);
  };

  return (
    <div className="search-section">
      <div className="search-bar">
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cerca giocatore..."
        />
        <button onClick={handleSearch}>Cerca</button>
      </div>
      
      <div className="results-grid">
        {results.map(player => (
          <div key={player.id} className="player-card">
            <img src={player.image} alt={player.name} />
            <h3>{player.name}</h3>
            <p>Overall: {player.rating}</p>
            <button onClick={() => onAddPlayer(player)}>
              Aggiungi alla squadra
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};