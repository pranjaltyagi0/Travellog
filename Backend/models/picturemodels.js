const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String, // Store base64-encoded image data as a string
      required: true,
    }
  ],
});

module.exports = mongoose.model('images', imageSchema);
