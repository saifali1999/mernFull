import { Link } from 'react-router-dom';

import React from 'react'

const Footer = () => {
    return (
        <>

            <div className='footer pt-5 pb-0' style={{backgroundColor:"#f7fafd"}}>

                <div className='container '>

                    <div className='row'>

                        <div className='col-lg-3 col-sm-6 mb-4'>
                            <div className='d-flex'>
                                <div className='footer-section'>
                                    <img src='images/brandlogo.png' alt='logo'></img>
                                    <p className='mt-3 px-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                                </div>

                            </div>
                        </div>

                        <div className='col-lg-3 col-sm-6 mb-4'>
                            <div className='d-flex justify-content-lg-center'>
                                <div className='footer-section text-align-center'>
                                    <h3>Company</h3>
                                    <ul className='p-0'>
                                        <li>About Us</li>
                                        <li>Services</li>
                                        <li>Features</li>
                                        <li>Our Pricing</li>
                                        <li>Latest News</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className='col-lg-3 col-sm-6 mb-4'>
                            <div className='d-flex justify-content-lg-center'>
                                <div className='footer-section'>
                                    <h3>Support</h3>
                                    <ul className='p-0'>
                                        <li>FAQ's</li>
                                        <li>Privacy Policy</li>
                                        <li>Terms & Conditions</li>
                                        <li>Team</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className='col-lg-3 col-sm-6 mb-4'>
                            <div className='d-flex justify-content-lg-center'>
                                <div className='footer-section'>
                                    <h3>Address</h3>
                                    <ul className='p-0'>
                                        <li>27 Division St, New York, NY 10002, USA</li>
                                        <li>Email: startp@gmail.com</li>
                                        <li>Phone: + (321) 984 754</li>
                                    </ul>

                                    <div className='footer-social  m-0'>
                                        <div className='d-flex justify-content-start'>
                                            <Link><i className='fa-brands fa-facebook me-2'></i></Link>
                                            <Link><i className='fa-brands fa-twitter me-2'></i></Link>
                                            <Link><i className='fa-brands fa-instagram me-2'></i></Link>
                                            <Link><i className='fa-brands fa-linkedin me-2'></i></Link>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='footer-copyright border-top'>
                 <div className='container'>
                    <div className='content py-3'>
                    <p className='m-0'>Copyright © 2024 StartP. All rights reserved by <span>EnvyTheme</span> </p> 
                  </div>

                 </div>
            </div>
                </div>
            </div>



         

        </>
    )
}

export default Footer
