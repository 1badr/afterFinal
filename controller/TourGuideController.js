const tourGuide = require('../model/tourGuideModel');

const createTourGuide = async (req, res) => {
  try {
    const newTourGuide = new tourGuide(req.body);
    await newTourGuide.save();
    res.status(201).json({ tourGuide: newTourGuide._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTourGuide = async (req, res) => {
  try {
    const { id } = req.params;
    await tourGuide.findByIdAndDelete(id);
    res.json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateTourGuide = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTourGuide = await tourGuide.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedTourGuide);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const getTourGuides = async (req, res) => {
  try {
    const tourGuides = await tourGuide.find();
    res.status(200).json({ tourGuides });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTourGuideById = async (req, res) => {
  try {
    const { id } = req.params;
    const tourGuideById = await tourGuide.findById(id);
    res.status(200).json(tourGuideById);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tour guide' });
  }
};

module.exports = {
  createTourGuide,
  deleteTourGuide,
  updateTourGuide,
  getTourGuides,
  getTourGuideById
};