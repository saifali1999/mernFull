// controllers/workController.js


 // require to deleted images as well

    const fs = require('fs');
    const path = require('path');

 // ---------------------------------

    const Work = require('../models/Ourworks');
    const multer = require('multer');

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../frontend/public/workimages/'); // Destination folder for uploaded images
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + '-' + file.originalname); // Unique filename for each uploaded file
    }
});

const upload = multer({ storage: storage });

// Controller functions

// Create a new work item
const createWork = async (req, res) => {
    try {
        const { title, description } = req.body;
        const image = req.file.filename; // Get the filename of the uploaded image

        const workItem = new Work({
            image,
            title,
            description
        });

        const createdWork = await workItem.save();
        res.status(201).json(createdWork);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all work items
const getAllWorks = async (req, res) => {
    try {
        const workItems = await Work.find();
        res.json(workItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific work item by ID
const getWorkById = async (req, res) => {
    const id = req.params.id;

    try {
        const workItem = await Work.findById(id);

        if (!workItem) {
            return res.status(404).json({ message: 'Work item not found' });
        }

        res.json(workItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a work item by ID
const updateWorkById = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    let updateFields = { title, description };

    if (req.file) {
        updateFields.image = req.file.filename; // Update image if a new one is uploaded
    }

    try {
        const updatedWork = await Work.findByIdAndUpdate(id, updateFields, { new: true });

        if (!updatedWork) {
            return res.status(404).json({ message: 'Work item not found' });
        }

        res.json(updatedWork);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a work item by ID
// const deleteWorkById = async (req, res) => {
//     const id = req.params.id;

//     try {
//         const deletedWork = await Work.findByIdAndDelete(id);

//         if (!deletedWork) {
//             return res.status(404).json({ message: 'Work item not found' });
//         }

//         res.json({ message: 'Work item deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

    const deleteWorkById = async (req, res) => {
        const id = req.params.id;
        try {
            const workItem = await Work.findById(id);

            if (!workItem) {
                return res.status(404).json({ message: 'Work item not found' });
            }
            // Construct the image path
            const imagePath = path.join(__dirname, '..', '..', 'frontend', 'public', 'workimages', workItem.image);

            // Delete the work entry
            await Work.findByIdAndDelete(id);

            // Delete the image file

            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.error('Error deleting image:', err);
                    return res.status(500).json({ message: 'Failed to delete the image' });
                }

                // res.json({ message: 'Work item and image deleted successfully' });
                res.json({ message: "Work item and image deleted successfully" })
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

module.exports = {
    createWork, getAllWorks, getWorkById, updateWorkById, deleteWorkById, upload
};
