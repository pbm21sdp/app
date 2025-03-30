import React from 'react';
import { useNavigate } from 'react-router-dom';

const AnimalCard = ({ animal }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="animal-card"
      onClick={() => navigate(`/animal/${animal.id}`)}
    >
      <div className="card-image-container">
        <img 
          src={animal.photos[0] || '/placeholder-animal.jpg'} 
          alt={animal.name}
          className="animal-image"
        />
        <span className="animal-status">{animal.status}</span>
      </div>
      
      <div className="card-content">
        <h3 className="animal-name">{animal.name}</h3>
        <p className="animal-breed">{animal.breed}</p>
        
        <div className="animal-meta">
          <span>🐾 {animal.age} years</span>
          <span>⚖️ {animal.weight} kg</span>
        </div>
        
        <button 
          className="details-button"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/animal/${animal.id}`);
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default AnimalCard;