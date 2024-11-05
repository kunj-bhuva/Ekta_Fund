import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS correctly
import './App.css';  // Importing the App-specific CSS file
import Header from './components/Header';  // Importing the Header component
import Body from './components/loadregisterpage';  // Importing the Body component

function App() {
  return (
    <div className="App">
      <Header/>
      <Body />
    </div>
  );
}

export default App;
