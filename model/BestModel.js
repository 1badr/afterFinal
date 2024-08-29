const mongoose = require('mongoose');

const bestHotelSchema = new mongoose.Schema({
    hotelId: { type: mongoose.Schema.Types.ObjectId, ref: 'hotel' },
    rating: Number,
    reviews: String,
    type: {
      type: String,
      enum: ['hotel','car','flight'] 
  },    });


  const bestHotel = mongoose.model('bestHotel', bestHotelSchema);

  module.exports = bestHotel;