import React, { useEffect, useState } from "react";
import "./Navbar.css";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

function Navbar(props) {
  const [navcolor, setnavcolor] = useState('rgba(0,0,0,0)');
  const [blur, setblur] = useState(1);
  const [extender, setextender] = useState(10);
  const [mobileview, setmobileview] = useState(0);
  const [sub_option, setsub_option] = useState(0);

  // user login
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate('/');
  };

  const changeBackground = () => {
    if (window.scrollY >= 700) {
      setnavcolor('rgba(0,0,0,0)');
      setblur(8);
    } else {
      setnavcolor('rgba(0,0,0,0)');
      setblur(1);
    }
  };

  const display_option = (num) => {
    if (sub_option === num) {
      setsub_option(0);
    } else {
      setsub_option(num);
    }
  };

  const changeview = () => {
    let screenWidth = window.innerWidth;
    if (mobileview === 0) {
      setmobileview(1);
      setextender(screenWidth - 50);
    } else {
      setsub_option(0);
      setmobileview(0);
      setextender(10);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <div className="changenav">
      <i onClick={changeview} style={{ left: `${extender}px` }} className="fa fa-bars" aria-hidden="true"></i>
      <nav className={`${mobileview === 1 ? 'navi_baar' : ''}`} style={{ backgroundColor: `${navcolor}`, backdropFilter: `blur(${blur}px)` }}>
        <div className="extend">
          {/* <i onClick={changeview} style={{ left: `${extender}px` }} class="fa fa-bars" aria-hidden="true"></i> */}
        </div>
        <div className="logo"><span style={{ color: 'orangered' }}>To</span>uri <span style={{ color: 'darkgreen' }}>fy</span></div>
        <div className="option">
          <Link className="opti" to="/">
            {props.opt1}
          </Link>
          <div onClick={() => display_option(1)} className="dropdown">
            <Link className="opti " onClick={() => props.onStateChange('HP')} to="/virtualtour" role="button" aria-expanded="false">Virtual Tour</Link>
            <div className={`dmenu ${sub_option === 1 ? 'subpart-1' : ''}`}>
              <Link className="dropdown-item" onClick={() => props.onStateChange('HP')} to="/virtualtour">Himachal Pradesh</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Rajasthan</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('PB')} to="/virtualtour">Punjab</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Goa</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('KL')} to="/virtualtour">Kerala</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Delhi</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Uttarakhand</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Maharashtra</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Tamil Nadu</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Uttar Pradesh</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Gujarat</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Jammu and Kashmir</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Madhya Pradesh</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Karnataka</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">West Bengal</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Andaman and Nicobar Islands</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Andhra Pradesh</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Odisha</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Assam</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Bihar</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Telangana</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Jharkhand</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Chhattisgarh</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Haryana</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Sikkim</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Chandigarh</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Arunachal Pradesh</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Manipur</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Meghalaya</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Nagaland</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Tripura</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Mizoram</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Puducherry</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Lakshadweep</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Dadar</Link>
              <Link className="dropdown-item" onClick={() => props.onStateChange('RJ')} to="/virtualtour">Ladakh</Link>
            </div>
          </div>
          <div onClick={() => display_option(2)} className="dropdown">
            <a className="opti" href="#" role="button" aria-expanded="false">Booking</a>
            <div className={`dmenu1 ${sub_option === 2 ? 'subpart-2' : ''}`}>
              <div className="r1">
                <a className="hud" href="#">Transportation</a>
                <a href="#">Flights</a>
                <a href="#">Trains</a>
                <a href="#">Buses</a>
                <a href="#">Cabs</a>
              </div>
              <div className="r2">
                <a className="hud" href="#">Lodging</a>
                <a href="#">Hotels</a>
                <a href="#">Homestays & Villas</a>
                <a href="#">Restaurants</a>
              </div>
            </div>
          </div>
          <Link className="opti" to="/">
            {props.opt4}
          </Link>

          {user ? (
            <div className="dropdown">
              <Link className="opti " to="/" role="button" aria-expanded="false">{user.username}</Link>
              <div className="dmenu3">
                <Link className="dropdown-item" onClick={handleLogout} to="/">Log Out</Link>
              </div>
            </div>
          ) : (
            <Link className="opti" to="/login">Login</Link>
          )}
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  opt1: PropTypes.string.isRequired,
  opt2: PropTypes.string.isRequired,
  opt3: PropTypes.string.isRequired,
  opt4: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Title",
  opt1: "Option1",
  opt2: "Option2",
  opt3: "Option3",
  opt4: "Option4",
};

export default Navbar;
