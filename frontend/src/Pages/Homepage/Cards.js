import React from 'react'

const Cards = () => {
  return (
    <>

      <div className='container mt-5 pt-5'>
        <div className='row all-cards'>

          <div className=" col-lg-3 col-md-6" >
            <div className='card border-0 card-hover'>
              <div className="card-body">
                <i className="fa-solid fa-bars-progress  icon1"></i>
                <h5 className="card-title">Zero Configuration</h5>
                <p className="card-text">Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>

              </div>
            </div>
          </div>

          <div className=" col-lg-3 col-md-6" >
            <div className='card border-0'>
              <div className="card-body">
                <i className="fa-solid fa-code  icon2"></i>
                <h5 className="card-title">Code Security</h5>
                <p className="card-text">Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
              </div>
            </div>
          </div>

          <div className=" col-lg-3 col-md-6" >
            <div className='card border-0'>
              <div className="card-body">
                <i className="fa-solid fa-people-group icon3"></i>
                <h5 className="card-title">Team Management</h5>
                <p className="card-text">Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
              </div>
            </div>
          </div>

          <div className=" col-lg-3 col-md-6 " >
            <div className='card border-0'>
              <div className="card-body">
                <i className="fa-solid fa-light fa-share-nodes  icon4"></i>
                {/* <i className="https://www.flaticon.com/free-icon/password_6733928"></i> */}
                <h5 className="card-title">Access Controlled</h5>
                <p className="card-text">Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
              </div>
            </div>
          </div>




        </div>
      </div>



    </>




  )
}

export default Cards
