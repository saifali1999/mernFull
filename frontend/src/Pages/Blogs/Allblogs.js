import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Allblogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/blog');
                setBlogs(response.data);
            } catch (error) {
                setError('Failed to fetch blogs');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='blogs'>
            <div className='container'>
                <div className='row'>
                    {loading && <p>Loading...</p>}
                    {error && <p className="text-danger">{error}</p>}
                    {!loading && !error && currentBlogs.map((blog) => (
                        <div className='col-lg-4 mb-5' key={blog._id}>
                            <div className='single-blog'>
                                <img src={`/blogimg/${blog.image}`} className='img1' alt='blog' />
                                <div className='content position-relative'>
                                    <div className='dates'>
                                        <i className="fa-solid fa-calendar-days"></i>
                                        {new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' })}
                                    </div>
                                    <h3>{blog.heading}</h3>
                                    <p>By Admin</p>
                                    <p dangerouslySetInnerHTML={{ __html: blog.description }} />
                                    <Link>Read more <i className='fa-solid fa-arrow-right'></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
                    </li>
                    {[...Array(totalPages).keys()].map(page => (
                        <li className={`page-item ${currentPage === page + 1 ? 'active' : ''}`} key={page}>
                            <button className="page-link" onClick={() => handlePageChange(page + 1)}>{page + 1}</button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Allblogs;
