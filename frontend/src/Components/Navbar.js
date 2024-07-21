import React from 'react'
import FontAwesomeIcon from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id="website-navbar" className="navbar navbar-expand-lg ">
    <div className="container">
      <img src='images/brandlogo.png' alt='logo'></img>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">About</a>
        </li>
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/services">Services</a>
        </li>
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/shop">Shop</a>
          </li>
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/blog">Blog</a>
        </li>
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
        </li>
     
        </ul>
        
        <i className="fa-solid fa-cart-shopping"></i> 
        
        <form className="d-flex btn-hover">
          <Link to='/contact'>
           <button className="btn-purple1" >Support</button>
          </Link>
          <Link to='/login'>
           <button className="btn-purple2" >login</button>
          </Link>
        </form>
      </div>
    </div>
  </nav>

  )
}

export default Navbar

