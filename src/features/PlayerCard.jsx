// PlayerCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function PlayerCard({ player }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/player/${player.id}`);
    };

    return (
        <div className="players-card" onClick={handleClick}>
            <img src={player.imageUrl} alt={player.name} className="players-image" />
            <div className="players-details">
                <h2> {player.name} </h2>
                <p className="breed">Breed: {player.breed} </p>
                <p className="status">Status: {player.status} </p>
            </div>
        </div>
    );
}

export default PlayerCard;
