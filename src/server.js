const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

let scenarios = [];
let vehicles = [];

app.get('/scenarios', (req, res) => {
  res.json(scenarios);
});

app.post('/scenarios', (req, res) => {
  
});

app.put('/scenarios/:id', (req, res) => {
  const { id } = req.params;
  const updatedScenario = req.body;
  const index = scenarios.findIndex((scenario) => scenario.id === parseInt(id));
  
});

app.delete('/scenarios/:id', (req, res) => {
  const { id } = req.params;
  scenarios = scenarios.filter((scenario) => scenario.id !== parseInt(id));
  res.status(204).end();
});

app.get('/vehicles', (req, res) => {
  res.json(vehicles);
});

app.post('/vehicles', (req, res) => {
  const newVehicle = req.body;
  newVehicle.id = vehicles.length + 1; 
  vehicles.push(newVehicle);
  res.status(201).json(newVehicle);
});

app.put('/vehicles/:id', (req, res) => {
  const { id } = req.params;
  const updatedVehicle = req.body;
  const index = vehicles.findIndex((vehicle) => vehicle.id === parseInt(id));
  
});

app.delete('/vehicles/:id', (req, res) => {
  const { id } = req.params;
  vehicles = vehicles.filter((vehicle) => vehicle.id !== parseInt(id));
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
