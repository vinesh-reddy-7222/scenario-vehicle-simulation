import React from 'react';
import './Sidebar.css';

function Sidebar({ createScenario, createVehicle}) {
    return (
      <div className="sidebar">
        <h2>Home</h2>
        <ul>
          <li><a href="#" onClick={createScenario}>Add Scenario</a></li>
          <li><a href="#" onClick={createScenario}>All Scenarios</a></li>
          <li><a href="#" onClick={createVehicle}>Add Vehicle</a></li>
        </ul>
      </div>
    );
  }


export default Sidebar;
