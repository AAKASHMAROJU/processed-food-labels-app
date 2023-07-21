import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="services" element={ <Services/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
