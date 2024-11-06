import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS correctly
import './App.css';  // Importing the App-specific CSS file
import Header from './components/Header_white';  // Importing the Header component
import Footer from './components/Footer';
import Home from './components/Home.js';  // Importing the Home component
import FAQs from './components/FAQs.js';  // Importing the FAQs component



function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      <Header />
      <Home />
      <FAQs /> 
=======
      <Header/>
      <Body />
>>>>>>> Stashed changes
      <Footer />
    </div>
  );
}

export default App;
