import React, { useState, useEffect } from 'react';
import './HomePage.css';
import axios from 'axios';

function HomePage() {
  const [scenarios, setScenarios] = useState([]);

  useEffect(() => {
    fetchScenarios();
  }, []);

  const fetchScenarios = async () => {
    try {
      const response = await axios.get('http://localhost:5000/scenarios');
      setScenarios(response.data);
    } 
    catch (error) {
      console.error('Error fetching scenarios:', error);
    }
  };

  const handleStartSimulation = (scenarioId) => {
    // Start simulation logic
    console.log('Simulation started for scenario:', scenarioId);
  };

  const renderScenarios = () => {
    return scenarios.map((scenario) => (
      <div className="scenario" key={scenario.id}>
        <h2>{scenario.name}</h2>
        <p>Time: {scenario.time}</p>
        <button onClick={() => handleStartSimulation(scenario.id)}>Start Simulation</button>
      </div>
    ));
  };

  return (
    <div className="homepage">
      <h1>Scenarios</h1>
      {renderScenarios()}
      <div className="simulation-container">
      </div>
    </div>
  );
}

export default HomePage;

