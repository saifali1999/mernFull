// controllers/blogController.js

const Blog = require('../models/Blog');
const multer = require('multer');

// require to deleted images as well

const fs = require('fs');
const path = require('path');

// --------------------------------------

// Multer configuration for file uploads

    const storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, '../frontend/public/blogimg/'); // Destination folder for uploaded images
        },
        filename: function(req, file, cb) {
            const uniqueSuffix = Date.now()
            cb(null, uniqueSuffix + '-' + file.originalname); // Unique filename for each uploaded file
        }
    });

const upload = multer({ storage: storage });


    // Create a new blog item
    const createBlog = async (req, res) => {
        try {
            const { heading, description } = req.body;
            const image = req.file.filename; // Get the filename of the uploaded image

            const blogItem = new Blog({
                image,
                heading,
                description
            });

            const createdblog = await blogItem.save();
            res.status(201).json(createdblog);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

 // Get all blogs 
    const getAllBlogs = async (req, res) => {
        try {
            const allBlogs = await Blog.find();
            res.json(allBlogs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    // Get a specific blog  by ID
    const getBlogById = async (req, res) => {
        const id = req.params.id;

        try {
            const blogdata = await Blog.findById(id);

            if (!blogdata) {
                return res.status(404).json({ message: 'Blog not found' });
            }

            res.json(blogdata);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    // Update a news item by ID
    const updateBlogById = async (req, res) => {
        const { id } = req.params;
        const { heading, description } = req.body;
        let updateFields = { heading, description };

        if (req.file) {
            updateFields.image = req.file.filename; // Update image if a new one is uploaded
        }

        try {
            const updatedBlog = await Blog.findByIdAndUpdate(id, updateFields, { new: true });

            if (!updatedBlog) {
                return res.status(404).json({ message: 'Blog not found' });
            }

            res.json(updatedBlog);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };

    // Delete a news item by ID
    // const deleteBlogById = async (req, res) => {
    //     const id = req.params.id;

    //     try {
    //         const deletedBlog = await Blog.findByIdAndDelete(id);

    //         if (!deletedBlog) {
    //             return res.status(404).json({ message: 'Blog not found' });
    //         }

    //         res.json({ message: 'Blog deleted successfully' });
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // };

    const deleteBlogById = async (req, res) => {
        const id = req.params.id;

        try {
            const blogPost = await Blog.findById(id);

            if (!blogPost) {
                return res.status(404).json({ message: 'Blog post not found' });
            }

            // Construct the image path
            const imagePath = path.join(__dirname, '..', '..', 'frontend', 'public', 'blogimg', blogPost.image);

            // Delete the blog entry
            await Blog.findByIdAndDelete(id);

            // Delete the image file
            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.error('Error deleting image:', err);
                    return res.status(500).json({ message: 'Failed to delete the image' });
                }

                res.json({ message: 'Blog post and image deleted successfully' });

            });
            
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };


module.exports = {
    createBlog, getAllBlogs, getBlogById, updateBlogById, deleteBlogById, upload
};
