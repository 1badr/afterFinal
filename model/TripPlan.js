const mongoose = require('mongoose');

const tripPlanSchema = new mongoose.Schema({
    userId: { type: String, ref: 'User' },
    country: { type: String, ref: 'country' },
    city: { type: String, ref: 'city' },
    startDate: Number,
    endDate: Number,
    budget: Number,
    expenses: Number,
    visit: Array,
    seen: {type : Array}
  });

  
  const tripplan = mongoose.model('tripplan', tripPlanSchema);

  module.exports = tripplan;