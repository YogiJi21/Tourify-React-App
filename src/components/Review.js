import React from 'react'
import "./Review.css"
import pimg from "./image/explore-perfil.png"
function Review() {
  return (
    <div className="reviewbox">
      <h3>Our Customer</h3>
      <h1>Review</h1>

      <div className="custreviews">

        <div className="cust_rbox">
        <div className="lpart">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatem, minima assumenda sit aperiam facere ex cum eveniet voluptatum quisquam quia! Enim rerum cumque ex incidunt mollitia voluptate, ut id.</p>
          <h5>lorem mausi</h5>
          <div>★★★★★</div>
        </div>

        <div className="rpart">
          <img src={pimg} alt="" />
        </div>
        </div>
        
        <div className="cust_rbox1">
        <div className="rpart">
          <img src={pimg} alt="" />
        </div>
        <div className="lpart">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatem, minima assumenda sit aperiam facere ex cum eveniet voluptatum quisquam quia! Enim rerum cumque ex incidunt mollitia voluptate, ut id.</p>
          <h5>lorem mausi</h5>
          <div>★★★★★</div>
        </div>
        
        </div>

      </div>

    </div>
  )
}

export default Review