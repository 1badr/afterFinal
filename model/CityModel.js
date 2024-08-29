const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    countryId: { type: String, ref: 'country' },
    name: { type: String},
    Description: String,
    
  });

  
  const city = mongoose.model('city', CitySchema);

  module.exports = city;