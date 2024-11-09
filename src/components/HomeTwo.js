import React from 'react'
import "./HomeTwo.css"
import ico1 from "./image/icons/icons8-way-100.png"
import ico2 from "./image/icons/icons8-destination-100.png"
import ico3 from "./image/icons/icons8-tour-64.png"
import ico4 from "./image/icons/icons8-story-100.png"
function HomeTwo() {
  return (
    <div className='Second_page'>
        <div className="aanchu"></div>
        <div className="mainmenu">
        <h4>Making adventure tours and activities</h4>
        <h1>What We Offer</h1>
        <div className="services">

            <div className="service_options">
                <img src={ico1} alt="" />
                <div className="service_content">
                    <h2>Best Adventure Destination</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facilis!
                </div>
            </div>

            <div className="service_options">
                <img src={ico2} alt="" />
                <div className="service_content">
                    <h2>Find Routines for your destinations</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facilis!
                </div>
            </div>

            <div className="service_options">
                <img src={ico3} alt="" />
                <div className="service_content">
                    <h2>Virtual Tour</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facilis!
                </div>
            </div>

            <div className="service_options">
                <img src={ico4} alt="" />
                <div className="service_content">
                    <h2>Sharing of Local Stories</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facilis!
                </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default HomeTwo