import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='foot'>
    {/* <!-- Footer --> */}
    <div className="container-fluid text-white-50 footer  pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h1 className="fw-bold mb-4">Tou<span className="text-white">rify</span></h1>
                    <p>Your ultimate travel companion, offering seamless hotel booking, interactive maps, virtual tours, and community-driven reviews.</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square me-1" href=""><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-square me-1" href=""><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-square me-1" href=""><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-square me-0" href=""><i className="fa fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Address</h5>
                    <p><i className="fa fa-map-marker zep  me-3"></i>Mathikere Road, Bangalore, INDIA</p>
                    <p><i className="fa fa-phone me-3 zep"></i>+91 7483548947</p>
                    <p><i className="fa fa-envelope zep me-3"></i>tourify@gmail.com</p>
                </div>
                <div className="col-lg-3 col-md-6 quick-links">
                    <h5 className="text-light mb-4">Quick Links</h5>
                    <div>
                    <span style={{paddingLeft:'2px'}}>&#62; <a className="btn" href="">About Us</a></span>
                    <span style={{paddingLeft:'2px'}}>&#62; <a className="btn" href="">Contact Us</a></span>
                    <span style={{paddingLeft:'2px'}}>&#62; <a className="btn" href="">Our Services</a></span>
                    <span style={{paddingLeft:'2px'}}>&#62; <a className="btn" href="">Terms & Condition</a></span>
                    <span style={{paddingLeft:'2px'}}>&#62; <a className="btn" href="">Support</a></span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Give Feedback</h5>
                    <p>Visit Our Website</p>
                    <div className="position-relative mx-auto" style={{maxWidth:'400px'}}>
                        <input style={{color:'rgba(255,255,255,.5)'}} className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-danger py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a style={{color:'rgba(255,255,255,.9)',textDecoration:'none'}} href="#">Tourify</a>, All Right Reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        Designed By <a style={{color:'rgba(255,255,255,.7)',textDecoration:'none'}} href="/">aanchal</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer --> */}
    </div>
  )
}

export default Footer