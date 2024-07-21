import React from 'react'

import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Allblogs from './Allblogs'


const Blogsection = () => {
  return (
    <>
      <div className='blogpage'>

        <Navbar />

        <div className='container3'>
          <div className='header'>
            <div className='box'>
              <h2>Blog Grid</h2>
            </div>
          </div>

        </div>
          
          <Allblogs/>


          <Footer />


      </div>


      
    </>
  )
}

export default Blogsection
