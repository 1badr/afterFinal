const bestHotel = require('../model/BestModel');

const getTopRatedByType = async (req, res) => {
  try {
    const types = ['hotel', 'car', 'flight'];
    const results = {};

    for (type of types) {
      results[type] = await bestHotel.find({ type: type })
        .sort({ rating: -1 }) 
        .limit(10)
        .populate('hotelId', 'name'); 
    }

    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching top rated items by type:', error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTopRatedByType,
};