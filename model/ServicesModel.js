const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
    cityId: { type: String, ref: 'city' },
    name: { type: String},
    Description: String,
    type: {
        type: String,
        enum: ['Historical place', 'Archaeological site','Tourist attraction','Restaurant ','Cafe '] 
    },  
  });

  
  const services = mongoose.model('services', servicesSchema);

  module.exports = services;