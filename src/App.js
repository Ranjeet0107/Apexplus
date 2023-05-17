import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.js';
import Home from './pages/Home';
import AddScenario from './pages/AddScenario';
import AllScenarios from './pages/AllScenarios';
import AddVehicle from './pages/AddVehicle';



const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addScenario" element={<AddScenario />} />
          <Route path="/allScenarios" element={<AllScenarios />} />
          <Route path="/addvehicle" element={<AddVehicle />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;



