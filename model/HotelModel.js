
const hotelSchema = new mongoose.Schema({
    name: String,
    city: String,
    country: String,
    address: String,
    rating: Number,
    price: Number,
    amenities: String,
    reviews: String
  });

  const hotel = mongoose.model('hotel', hotelSchema);

  module.exports = hotel;