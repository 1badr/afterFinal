
const carSchema = new mongoose.Schema({
    model: String,
    make: String,
    year: Number,
    price: Number,
    availability: Boolean,
    location: String
  });

  
  const car = mongoose.model('car', carSchema);

  module.exports = car;