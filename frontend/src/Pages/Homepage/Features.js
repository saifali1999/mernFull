import React from "react";
import { Link } from "react-router-dom";
import Teamslider from "../../Components/Teamslider";
import Workslider from "../../Components/Workslider";
import Usersslider from "../../Components/Usersslider";
import Section3 from "../../Components/Section3";
import Footer from "../../Components/Footer";

const Features = () => {
  return (
    <>
      <div className="features-section">
        <div className="container">
          <div className="box text-center py-4">
            <h2>Our Features</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 py-3">
              <div className="card position-relative">
                <div className="d-flex align-items-center">
                  <div className="icons">
                    <i className="fa-solid fa-gear icon-inner"></i>
                  </div>

                  <div className="input">
                    <Link className="card-title">
                      Incredible Infrastructure
                    </Link>
                    <p className="card-text mt-2">
                      Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                      incididunt ut labore dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 py-3">
              <div className="card position-relative">
                <div className="d-flex align-items-center">
                  <div className="icons">
                    <i className="fa-solid fa-envelope"></i>
                  </div>

                  <div className="input">
                    <Link className="card-title">Email Notifications</Link>
                    <p className="card-text mt-2">
                      Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                      incididunt ut labore dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 py-3">
              <div className="card position-relative">
                <div className="d-flex align-items-center">
                  <div className="icons2">
                    <i className="fa-solid fa-border-none icons-inner"></i>
                  </div>

                  <div className="input">
                    <Link className="card-title">Simple Dashboard</Link>
                    <p className="card-text mt-2">
                      Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                      incididunt ut labore dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 py-3">
              <div className="card position-relative">
                <div className="d-flex align-items-center">
                  <div className="icons2">
                    <i className="fa-solid fa-circle-info icons-inner"></i>
                  </div>

                  <div className="input">
                    <Link className="card-title">Information Retrieval</Link>
                    <p className="card-text mt-2">
                      Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                      incididunt ut labore dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 py-3">
              <div className="card position-relative">
                <div className="d-flex align-items-center">
                  <div className="icons3">
                    <i className="fa-solid fa-cube icons-inner"></i>
                  </div>

                  <div className="input">
                    <Link className="card-title">
                      Drag & Drop Functionality
                    </Link>
                    <p className="card-text mt-2">
                      Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                      incididunt ut labore dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 py-3">
              <div className="card position-relative">
                <div className="d-flex align-items-center">
                  <div className="icons3">
                    <i className="fa-regular fa-bell icons-inner"></i>
                  </div>

                  <div className="input">
                    <Link className="card-title">Deadline Reminders</Link>
                    <p className="card-text mt-2">
                      Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                      incididunt ut labore dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team-section">
        <div className="box2 text-center py-5">
          <h2>Our Awesome Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="row">
          <Teamslider />
        </div>
      </div>

      
      <Section3 />

      <div className="works">
        <div className="box">
          <h2>Our Recent Works</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row">
          <Workslider />
        </div>
      </div>

      <div className="plans">
        <div className="container">
          <div className="box4">
            <h2>Pricing Plans</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="d-flex">
              <div className="pricing-card text-align-center">
                <div className="pricing-header position-relative">
                  <h3>Basic Plan</h3>
                </div>

                <div className="price">
                  <h3>
                    {" "}
                    <sup>$</sup>15.00 <span>/Mon</span>
                  </h3>
                </div>

                <div className="pricing-features text-align-center">
                  <ul>
                    <li className="features">5 GB Bandwidth</li>
                    <li className="features">Highest Speed</li>
                    <li className="features">1 GB Storage</li>
                    <li className="features">Unlimited Website</li>
                    <li className="features">Unlimited Users</li>
                    <li className="features">24x7 Great Support</li>
                    <li className="cross">Data Security and Backups</li>
                    <li className="cross">Monthly Reports and Analytics</li>
                  </ul>

                  <div className="btn-hover">
                    <button className="btn-purple1" type="">
                      SELECT PLAN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 advanced-plan">
            <div className="d-flex">
              <div className="pricing-card text-align-center">
                <div className="pricing-header2 position-relative">
                  <h3>Advanced Plan</h3>
                </div>

                <div className="price">
                  <h3>
                    {" "}
                    <sup>$</sup>35.00 <span>/Mon</span>
                  </h3>
                </div>

                <div className="pricing-features text-align-center ">
                  <ul>
                    <li className="features">10 GB Bandwidth</li>
                    <li className="features">Highest Speed</li>
                    <li className="features">3 GB Storage</li>
                    <li className="features">Unlimited Website</li>
                    <li className="features">Unlimited Users</li>
                    <li className="features">24x7 Great Support</li>
                    <li className="features">Data Security and Backups</li>
                    <li className="cross">Monthly Reports and Analytics</li>
                  </ul>

                  <div className=" btn-hover">
                    <button className="btn-purple2" type="">
                      SELECT PLAN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 expert-plan">
            <div className="d-flex">
              <div className="pricing-card text-align-center">
                <div className="pricing-header position-relative">
                  <h3>Expert Plan</h3>
                </div>

                <div className="price">
                  <h3>
                    {" "}
                    <sup>$</sup>65.00 <span>/Mon</span>
                  </h3>
                </div>

                <div className="pricing-features text-align-center">
                  <ul>
                    <li className="features">5 GB Bandwidth</li>
                    <li className="features">Highest Speed</li>
                    <li className="features">5 GB Storage</li>
                    <li className="features">Unlimited Website</li>
                    <li className="features">Unlimited Users</li>
                    <li className="features">24x7 Great Support</li>
                    <li className="features">Data Security and Backups</li>
                    <li className="features">Monthly Reports and Analytics</li>
                  </ul>

                  <div className="btn-hover">
                    <button className="btn-purple1" type="">
                      SELECT PLAN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="users">
        <div className="container">
          <div className="section">
            <h2>What Users Saying</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="feedback">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <Usersslider />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Features;
