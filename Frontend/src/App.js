import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login.js";
import ForgotPassword from "./components/Forgotpassword.js";
import Register from "./components/Registerhere.js";
import Home from "./components/Home.js";
import Donation_page from "./components/Donation_page.js";
import ContactUs from "./components/ContactUs.js"; 
import About from "./components/about.js"; 
import Missions from "./components/missions.js";
import NGOregistration from "./components/NGOregistration.js";
import Legal from "./components/Legal.js";
import Privacypolicy from "./components/Privacypolicy.js";
import Termsofuse from "./components/termsofuse.js";
import NGOupdation from "./components/NGOupdation.js";
import NGOsearch from "./components/ngosearch.js";
import NGOsearchResults from "./components/ngosearchresults.js";
import Admin from "./components/admin.js";
import NGOPagegeneral from "./components/ngopagegeneral.js";
import WebsiteReview from "./components/WebsiteReview.js";
import DonorReview from "./components/DonorReview.js";
import Donation from "./components/money.js";
// import Dash_NGO from "./components/dashNGO.js";
import Login_NGO from "./components/Login_NGO.js";
import NGOpage from "./components/ngopage.js";
import NGODash from "./components/ngodashboard.js"
import Land from "./components/land.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/land" element={<Land />} />
        <Route path="/admin-dashboard" element={<Admin />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/donate" element={<Donation_page />} />
        <Route path="/website-review" element={<WebsiteReview />} />{" "}
        <Route path="/donorreview" element={<DonorReview />} />
        <Route path="/about" element={<About />} /> {/* Route for About */}
        <Route path="/missions" element={<Missions />} />
        <Route path="/NGOregistration" element={<NGOregistration />} />
        <Route path="/NGOupdation" element={<NGOupdation />} />
        <Route path="/Legal" element={<Legal />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/Termsofuse" element={<Termsofuse />} />
        <Route path="/Privacypolicy" element={<Privacypolicy />} />
        <Route path="/NGOsearch" element={<NGOsearch />} />
        <Route path="/NGOsearchresults" element={<NGOsearchResults />} />
        <Route path="/NGOpage" element={<NGOpage />} /> 
        <Route path="/ngo/:index" element={<NGOPagegeneral />} />
        {/* <Route path="/Dash_NGO" element={<Dash_NGO />} /> */}
        <Route path="/Login_NGO" element={<Login_NGO />} />
        <Route path="/NGODash" element={<NGODash />} />
      </Routes>
    </Router>
  );
}

export default App;
