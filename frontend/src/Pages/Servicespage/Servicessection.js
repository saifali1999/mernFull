import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const Servicessection = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get('http://localhost:5000/services');
                setServices(response.data);
            } catch (error) {
                setError('Failed to fetch services');
                console.error('Error fetching services:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    return (
        <>
            <div className='servicespage'>
                <Navbar />
                <div className='container3'>
                    <div className='header'>
                        <div className='box'>
                            <h2>Services</h2>
                        </div>
                    </div>
                </div>

                <div className='services-section'>
                    <div className='container'>
                        <div className='row'>
                            {loading && <p>Loading...</p>}
                            {error && <p className="text-danger">{error}</p>}
                            {!loading && services.map((service) => (
                                <div className='col-lg-4 col-sm-6 mb-4' key={service._id}>
                                    <div className='box'>
                                        <img src={`/serviceimg/${service.image}`} className='img1' alt={service.title} />
                                        <h3><a href=''>{service.title}</a></h3>
                                        <p dangerouslySetInnerHTML={{ __html : service.description}}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Servicessection;
