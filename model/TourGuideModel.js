const mongoose = require('mongoose');


const tourGuideSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    language: String,
    specialization: String,
    availability: Boolean,
    profilePicture: String,
    reviews: [
      {
        rating: { type: Number, min: 1, max: 5 },
        reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
      }
    ]  });

  
  const tourGuide = mongoose.model('tourGuide', tourGuideSchema);

  module.exports = tourGuide;