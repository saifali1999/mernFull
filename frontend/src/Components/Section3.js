import React from "react";

const Section3 = () => {
  return (
    <>
      <div className="section3">
        <div className="container">
          <div className="box">
            <div className="section d-flex flex-column">
              <h2>We Always Try To Understand Users</h2>
              <h2> Expectation</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-6">
              <div className="d-flex justify-content-center">
                <div className="facts">
                  <h3>180K</h3>
                  <p>Downloaded</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-6">
              <div className="d-flex justify-content-center">
                <div className="facts">
                  <h3>20K</h3>
                  <p>Feedback</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-6">
              <div className="d-flex justify-content-center">
                <div className="facts">
                  <h3>500+</h3>
                  <p>Workers</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-6">
              <div className="d-flex justify-content-center">
                <div className="facts ">
                  <h3>70+</h3>
                  <p>Contributors</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-bar d-flex col-md-8 mx-auto">
            <div className="contact">
              <div className="box">
                <h5>Have any question about us?</h5>
                <p>Don't hesitate to contact us</p>
              </div>
            </div>

            <div className=" btn-hover">
              <button className="btn-purple1" type="">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
