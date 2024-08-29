const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    userId: { type: String, ref: 'User' },
    tripPlanId: { type: String, ref: 'tripplan' },
    content: String,
    createdAt: { type: Date, default: Date.now }
  });



  const note = mongoose.model('note', noteSchema);

  module.exports = note;