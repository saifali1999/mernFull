const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      image: {
        type: String, // Assuming storing image path for simplicity
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['draft', 'published', 'archived'], // Example statuses, adjust as needed
        default: 'draft',
    },
})

// We will create a new Collection

const Blog = new mongoose.model('Blog', blogSchema);

module.exports = Blog;

