import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import ForgotPassword from './components/Forgotpassword.js';
import Register from './components/Registerhere.js';
import Home from './components/Home.js';
import Donation_page from './components/Donation_page.js';
import ContactUs from './components/ContactUs.js';  // Import ContactUs component
import About from './components/about.js';  // Import About component
import Missions from './components/missions.js';
import NGOregistration from './components/NGOregistration.js';
import Legal from './components/Legal.js';
import Privacypolicy from './components/Privacypolicy.js';
import Termsofuse from './components/termsofuse.js';
import NGOupdation from './components/NGOupdation.js';
import NgosearchResults from './components/ngosearchresults.js';

import FeedTheHungry from './components/feedthehungry.js';
import EveryGirlInSchool from './components/everygirlinschool.js';
import SafeWaterForAll from './components/safewaterforall.js';
import RightToCleanAir from './components/righttocleanair.js';
import ProtectTheElderly from './components/protectelderly.js';
import NoChildOrphaned from './components/nochildorphaned.js';
import ManageIndiasWaste from './components/managewaste.js';
import EndPeriodPoverty from './components/endperiodpoverty.js';
import StopAnimalCruelty from './components/stopanimalcruelity.js';
import NGOPagegeneral from './components/ngopagegeneral.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/donate" element={<Donation_page />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/NGOregistration" element={<NGOregistration />} />
        <Route path="/NGOupdation" element={<NGOupdation />} />
        <Route path="/Legal" element={<Legal />} />
        <Route path="/Termsofuse" element={<Termsofuse />} />
        <Route path="/Privacypolicy" element={<Privacypolicy />} />

        {/* Dynamic Routes for each NGO */}
        <Route path="/ngo/:index" element={<NGOPagegeneral />} />
      </Routes>
    </Router>
  );
}

export default App;
