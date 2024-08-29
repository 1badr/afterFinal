const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
    name: { type: String},
    Description: String,
    
  });

  
  const country = mongoose.model('country', CountrySchema);

  module.exports = country;