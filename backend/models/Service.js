const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    title: {
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

const Services = new mongoose.model('Services', serviceSchema);

module.exports = Services;