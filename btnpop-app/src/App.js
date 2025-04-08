import logo from './logo.svg';
import './App.css';
import react from 'react';
import { useState } from 'react';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="container">
     <Navbar />

     <div className="footer">
     <Footer />
     </div>
    </div>
  );
}

export default App;
