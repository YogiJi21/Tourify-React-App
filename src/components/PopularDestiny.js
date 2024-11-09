import React from 'react'
import udaipur from "./image/UDAIPUR.jpg"
import pushkar from "./image/tour3.jpg"
import golden from "./image/img8.jpg"
import varanasi from "./image/VARANASI.jpg"
import darj from "./image/DARJEELING.jpg"
import taj from "./image/agra.jpg"
import manali from "./image/manali.jpg"
import pondi from "./image/PONDICHERRY.jpg"
import varkala from "./image/varkala.jpg"
import "./PopularDestiny.css"
function PopularDestiny() {
  return (
    <div className="popular">
        <h1>Enjoy the Beauty <br />of India</h1>
        
        <div className="destinations">

            <div className="card_destiny">
                <img src={udaipur} alt="" />
                <h2>Udaipur</h2>
                <p>Rajasthan</p>
            </div>
        
        
        
            <div className="card_destiny">
                <img src={manali} alt="" />
                <h2>Manali</h2>
                <p>Himachal Pradesh</p>
            </div>
        
        
       
            <div className="card_destiny">
                <img src={pondi} alt="" />
                <h2>Puduchery</h2>
                <p>Tamil Naidu</p>
            </div>
        
        
        
            <div className="card_destiny">
                <img src={varanasi} alt="" />
                <h2>Varanasi</h2>
                <p>Uttar Pradesh</p>
            </div>
        
        
        
            <div className="card_destiny">
                <img src={taj} alt="" />
                <h2>Taj Mahal</h2>
                <p>Uttar Pradesh</p>
            </div>
        
        
        
            <div className="card_destiny">
                <img src={pushkar} alt="" />
                <h2>Pushkar</h2>
                <p>Rajasthan</p>
            </div>
        
        
        
            <div className="card_destiny">
                <img src={golden} alt="" />
                <h2>Amritsar</h2>
                <p>Punjab</p>
            </div>
        
        
        
            <div className="card_destiny">
                <img src={darj} alt="" />
                <h2>Darjeeling</h2>
                <p>West Bengal</p>
            </div>
        
        
        
            <div className="card_destiny">
                <img src={varkala} alt="" />
                <h2>Varkala</h2>
                <p>Kerala</p>
            </div>
        </div>


    </div>
  )
}

export default PopularDestiny