import React, { useEffect, useState } from 'react';
import PawBackground from '../components/PawBackground';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/api';
import AnimalCard from '../components/AnimalCard';
import '../styles/AnimalList.css';

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get('/api/animals');
        setAnimals(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching animals:', error);
        setIsLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  return (
    <div className="animal-list-wrapper">
      <PawBackground />
      
      <div className="animal-list-container">
        <button 
          className="back-home-button"
          onClick={() => navigate('/')}
        >
          ← Back to Home
        </button>

        <h1 className="page-title">Our Furry Friends 🐾</h1>

        {isLoading ? (
          <div className="loading-spinner">Loading animals...</div>
        ) : (
          <div className="animal-grid">
            {animals.map(animal => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimalList;