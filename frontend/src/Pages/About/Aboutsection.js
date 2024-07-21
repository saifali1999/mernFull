import {React, useState, useEffect} from "react";
import Navbar from "../../Components/Navbar";
import Teamslider from "../../Components/Teamslider";
import "./aboutsection.css";
import Footer from "../../Components/Footer";
import Readytotalk from "../../Components/Readytotalk";
import Section3 from "../../Components/Section3";

import axios from "axios";

const Aboutsection = () => {

  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutus = async () => {
        try {
            const response = await axios.get('http://localhost:5000/aboutus');
            setAbout(response.data);
            // console.log(response.data);
        } catch (error) {
            setError('Failed to fetch data');
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    fetchAboutus();
}, []);

  return (
    <>
      <div className="aboutpage">
        <Navbar />

        <div className="container3">
          <div className="header">
            <div className="box">
              <h2>About Us</h2>
            </div>
          </div>
        </div>

        <div className="section4">
          <div className="container">
            <div className="">
            {loading && <p>Loading...</p>}
            {error && <p className="text-danger">{error}</p>}
            {
              !loading && about.map((about, index) =>{
                return (
                 <div className="row" key={index}>
                   <div className="col-lg-6 py-3" >
                    <div className="aboutus-img">
                      <img src={`/aboutUs/${about.image}`} className="img1 w-100" alt="about-img" />
                    </div>
                  </div>

                  <div className="col-lg-6" key={about._id}>
                    <div className="section-content">
                      <h2>{about.title}</h2>
                      <div dangerouslySetInnerHTML={{__html:about.description}} />
                    </div>
                  </div>
                 </div>

                )
              })
            }
            </div>

            <div className="about-inner">
              <div className="row">
                <div className="col-lg-4">
                  <div className="inner">
                    <h3>Our History</h3>
                    <p>
                      Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                      In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                      elei fend et tiram
                    </p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="inner">
                    <h3>Our Mission</h3>
                    <p>
                      Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                      In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                      elei fend et tiram
                    </p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="inner">
                    <h3>Who We Are</h3>
                    <p>
                      Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                      In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                      elei fend et tiram
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="team-section">
          <div className="container">
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
        </div>

        <Readytotalk />

        <Section3 />
      </div>

      <Footer />
    </>
  );
};

export default Aboutsection;
