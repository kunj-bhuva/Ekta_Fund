// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS correctly
// import './App.css';  // Importing the App-specific CSS file
// import Header from './components/Header_white';  // Importing the Header component
// import Footer from './components/Footer';
// import Home from './components/Home.js';  // Importing the Home component
// import FAQs from './components/FAQs.js';  // Importing the FAQs component
// import Login from './components/Login.js'



// function App() {
//   return (
//     <div className="App">
//       {/* <Header />
//       <Home />
//       <FAQs /> 
//       <Footer /> */}

//       <Login/>
//     </div>
//   );
// }

// export default App;


//for just login funcationality

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Login.js';
// import Home from './components/Home.js';  // Assuming you have a Home component

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/" element={<Login />} /> {/* Default to Login Page */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import ForgotPassword from './components/Forgotpassword.js';
import Register from './components/Registerhere.js';
import Home from './components/Home.js';

function App() {
  return (
<<<<<<< Updated upstream
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
=======
    <div className="App">
      <Header />
      <Home />
      <FAQs /> 
      {/* <Header/> */}
      {/* <Body /> */}
      <Footer />
    </div>
>>>>>>> Stashed changes
  );
}

export default App;
