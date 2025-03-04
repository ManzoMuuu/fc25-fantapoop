import { useDrop } from 'react-dnd';

export const TeamBuilder = ({ players, onRemovePlayer }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'player',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div 
      ref={drop} 
      className={`team-container ${isOver ? 'highlight' : ''}`}
    >
      <h2>La tua squadra ({players.length}/11)</h2>
      <div className="formation-grid">
        {players.map((player, index) => (
          <div key={index} className="player-in-team">
            <span>{player.name}</span>
            <button onClick={() => onRemovePlayer(index)}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
};