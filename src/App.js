
import React, { useState, useEffect } from 'react';
import './App.css';
import ContentDiaplay from "./components/ContentDiaplay";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import HomeTwo from './components/HomeTwo';
import Footer from './components/Footer';
import foto from "./components/image/home-beach.jpg"
import PopularDestiny from './components/PopularDestiny';
import Quote from './components/Quote';
import Choose from './components/Choose';
import Gallery from './components/Gallery';
import Review from './components/Review';
import VirtualTour from './components/VirtualTour';
import Booking from './components/Booking';
import Testing from './components/Testing';
import Login from './components/Login';
import LocalStories from './components/LocalStories';
function App() {
  const [mode, setmode] = useState("rgba(0,0,0,0)");
  const [currentState, setCurrentState] = useState('HP');
  const [user, setUser] = useState(null);
  const handleStateChange = (stateCode) => {
    setCurrentState(stateCode);
  };
  const modes = () => {
    if (mode === "rgba(0,0,0,.1)") {
      setmode("rgba(0,0,0,.9)");
    } else {
      setmode("rgba(0,0,0,.1)");
    }
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);
  
  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <div className='back'>
      <Router>

      <Navbar
          mode={mode}
          title="Eco Track"
          opt1="Home"
          opt2="Problem"
          opt3="Carbon Footprint" 
          opt4="About Us"
          modes={modes}
          onStateChange={handleStateChange}
          />
          <Routes>
          <Route path="/" element={<div style={{ overflow: "hidden", position: "relative", width:"100%",height:'100vh'}}><Home/> </div>} />
          <Route path="/virtualtour" element={<Testing currentState={currentState}/>} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      
      <div className="center_page">
        <div className="leftpart">
          <h1>Learn More <br />About Tourify</h1>
          <p>
            All the trips around India are a great pleasure and happiness for anyone, 
            enjoy the sights when you travel India. Travel safely and without worries, get your trip and 
            explore the paradises of India 
          </p>
          <button>Explore Tourify &#8594;</button>
        </div>
        <img src={foto} alt="" />
      </div>
      <HomeTwo/>
      <PopularDestiny/>
      <Quote/>
      <Choose/>
      <Booking/>
      <LocalStories/>
      <Review/>
      <Gallery/>
      <Footer/>
      {/* <VirtualTour/> */}
      
          </Router>
    </div>
  );
}

export default App;
