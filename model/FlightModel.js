const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  flightDate: { 
    type: String,
    required: true
  },
  flightStatus: { 
    type: String,
    required: true,
    enum: ['scheduled', 'delayed', 'cancelled', 'arrived', 'departed'] 
  },
  departure: { 
    airport: { 
      type: String,
      required: true
    },
    timezone: { 
      type: String,
      required: true
    },
    iata: { 
      type: String,
      required: true
    },
    icao: { 
      type: String,
      required: true
    },
    terminal: String, 
    gate: String, 
    delay: Number, 
    scheduled: { 
      type: Date,
      required: true
    },
    estimated: { 
      type: Date,
      required: true
    },
    actual: Date, 
    estimatedRunway: Date, 
    actualRunway: Date 
  },
});

const flight = mongoose.model('flight', flightSchema);

module.exports = flight;