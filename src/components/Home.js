import React from 'react'
import "./Home.css"
import img1 from "./image/img1.jpg"
import img2 from "./image/img2.jpg"
import img3 from "./image/img3.jpg"
import img4 from "./image/img4.jpg"
function Home() {
  return (
    <div className='home_page'>
      {/* home code */}
      <div className="main_container">
        <h5>Welcome to Tourify</h5>
        <h1>Explore</h1>
        <h1>The World</h1>
        <span>Live the trips exploring the world, discover paradises,islands, mountains and much more, get you trip now.</span>
        <button>
          Start Your Journey &#8594;
        </button>
      </div>

      <div className="destination">
      
        <div className="card_state">
          <h5>Delhi</h5>
          <div style={{backgroundImage:`url(${img1})`}} className="tint"></div>
        </div>
      
        <div className="card_state">
          <h5>Ladakh</h5>
          <div style={{backgroundImage:`url(${img4})`}} className="tint"></div>
        </div>
      
        <div className="card_state">
          <h5>Andaman</h5>
          <div style={{backgroundImage:`url(${img3})`}} className="tint"></div>
        </div>
      
        <div className="card_state">
          <h5>Himachal</h5>
          <div style={{backgroundImage:`url(${img2})`}} className="tint"></div>
        </div>
        
      </div>

    </div>
  )
}

export default Home