const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true, // Assuming each user can have one set of images
  },
  images: [{
    data: {
      type: String, // Store base64-encoded image data as a string
      required: true,
    }
  }],
});

module.exports = mongoose.model('Image', imageSchema);
