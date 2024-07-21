import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Link } from 'react-router-dom';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'; 
import 'swiper/css/pagination';


    // Utility function to strip HTML tags from a string
    const stripHtmlTags = (str) => {
      if (!str) return "";
      return str.replace(/<\/?[^>]+(>|$)/g, "");
   };

export default () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch news data
    axios.get('http://localhost:5000/team')
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      setError(error.message);
    });

}, []);

  return (
     <>
    <Swiper
      modules={[ Autoplay, Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000, // Change slide every 3 seconds
        disableOnInteraction: false, // Autoplay will not be disabled after user interactions
      }}
      breakpoints={{
        475: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
       
        1200: {
          slidesPerView: 4,
        },
      }}

    >

      { data && data.map((item, index) => (
          <SwiperSlide key={index}>
                <div className="team-member">
                    <img
                    src={require(`/public/teamimg/${item.image}`)}
                     className='img ' alt='team-member1' />
                    <div className="team-info">
                      <h5 className="member1-title m-0">{item.title}</h5>
                      <p className="member1-text m-0">{item.role}</p>
                    </div>

                    <div className='content p-3'>
                      <div className='d-flex justify-content-center'>
                        <Link><i className='fa-brands fa-facebook'></i></Link>
                        <Link><i className='fa-brands fa-twitter'></i></Link>
                        <Link><i className='fa-brands fa-linkedin'></i></Link>
                        <Link><i className='fa-brands fa-whatsapp'></i></Link>
                      </div>
                    {/* <p dangerouslySetInnerHTML={{ __html: item.description}} /> */}
                     <p>{stripHtmlTags(item.description )}</p>
                     
                    </div>
                  </div>
          </SwiperSlide>

        ))
      }
        

      
     
    </Swiper>


    </>
    
  );
};