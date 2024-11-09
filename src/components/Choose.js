import React from 'react'
import "./Choose.css"

function Choose() {
  return (
    <div className='choose'>
        <h5>Why Choose Us</h5>
        <h1>Countless Experiences</h1>
        <div className="choose_container">

            <div className="choose_card">
            <i class="fa fa-globe" aria-hidden="true"></i>
                <h3>Worldwide Coverage</h3>
                <p>Discover destinations around the globe with our extensive database of tourist attractions and accommodations.</p>
            </div>

            <div className="choose_card">
            <i class="fa fa-inr" aria-hidden="true"></i>
                <h3>Affordable Prices</h3>
                <p>Enjoy budget-friendly travel options with exclusive deals and discounts on hotel bookings.</p>
            </div>

            <div className="choose_card">
            <i class="fa fa-headphones" aria-hidden="true"></i>
                <h3>24/7 Service</h3>
                <p>Our support team is available around the clock to assist you with any travel needs or inquiries.</p>
            </div>

            <div className="choose_card">
            <i class="fa fa-user" aria-hidden="true"></i>
                <h3>User-Friendly Interface</h3>
                <p>Navigate our platform effortlessly with an intuitive design that makes trip planning quick and easy.</p>
            </div>

        </div>
    </div>
  )
}

export default Choose