// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Login.js';
// import ForgotPassword from './components/Forgotpassword.js';
// import Register from './components/Registerhere.js';
// import Home from './components/Home.js';
// import Admin from './components/admin.js';
// import Donation_page from './components/Donation_page.js';
// // import NGOregistration from './components/NGOregistration.js';
// import ContactUs from './components/ContactUs.js';  // Import ContactUs component
// import About from './components/about.js';  // Import About component
// import Missions from './components/missions.js';
// import NGOregistration from './components/NGOregistration.js';
// import Legal from './components/Legal.js';
// import Privacypolicy from './components/Privacypolicy.js';
// import Termsofuse from './components/Termsofuse.js';

// function App() {
//   return (
//     <Admin/>
//     // <Router>
//     //   <Routes>
//     //     <Route path="/" element={<Login />} />
//     //     <Route path="/login" element={<Login />} />
//     //     <Route path="/forgot-password" element={<ForgotPassword />} />
//     //     <Route path="/register" element={<Register />} />
//     //     <Route path="/home" element={<Home />} />
//     //     <Route path="/donate" element={<Donation_page />} />
//     //     <Route path="/contact-us" element={<ContactUs />} />  {/* Route for Contact Us */}
//     //     <Route path="/about" element={<About />} />  {/* Route for About */}
//     //     <Route path="/missions" element={<Missions />}/>
//     //     <Route path="/NGOregistration" element={<NGOregistration />}/>
//     //     <Route path="/Legal" element={<Legal />}/>
//     //     <Route path="/Termsofuse" element={<Termsofuse />}/>
//     //     <Route path="/Privacypolicy" element={<Privacypolicy />}/>
//     //   </Routes>
//     // </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './components/admin.js'
import Dashboard from './components/dash.js';
import OrganisationApprovals from './components/OrganizationApprovals.js';
import Donations from './components/admindonations.js';
import Overview from './components/adminoverview.js';

function App() {
  return (
      <Admin/>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Dashboard />} />
    //     <Route path="/overview" element={<div>Overview Page</div>} />
    //     <Route path="/donors" element={<div>Donors Page</div>} />
    //     <Route path="/gift-matching" element={<div>Gift Matching Page</div>} />
    //     <Route path="/report" element={<div>Report Page</div>} />
    //     <Route path="/settings" element={<div>Settings Page</div>} />
    //     <Route path="/logout" element={<div>Logout Page</div>} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;

