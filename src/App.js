import React from 'react';
import Sidebar from './Sidebar';
import HomePage from './HomePage';


function App() {
  const handleCreateScenario = () => {
    // The Logic to create a new scenario.
    console.log('Create new scenario');
  };

  const handleCreateVehicle = () => {
    // The Logic to create a new vehicle.
    console.log('Create new vehicle');
  };

  return (
    <div className="App">
      <Sidebar onCreateScenario={handleCreateScenario} onCreateVehicle={handleCreateVehicle} />
      <HomePage />
    </div>
  );
}

export default App;
