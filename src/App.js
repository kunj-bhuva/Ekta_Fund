import React from 'react';
import "./..node_modeules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';  // Importing the App-specific CSS file
import Header from './components/Header';  // Importing the Header component (from your example)
import Body from './components/Body'; 

function App() {
  return (
    <div className="App">
      <Header /> 
      <Body/> 
    </div>
  );
}

export default App;
