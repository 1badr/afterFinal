const country = require('../model/CountryModel');

const createCountry = async (req, res) => {
  try {
    const newCountry = new country(req.body);
    await newCountry.save();
    res.status(201).json({ countryId: newCountry._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCountry = async (req, res) => {
  try {
    const { id } = req.params;
    await country.findByIdAndDelete(id);
    res.json({ message: 'Country deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCountry = await country.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedCountry);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const getCountryById = async (req, res) => {
  try {
    const { id } = req.params;
    const countryById = await country.findById(id);
    if (!countryById) {
      return res.status(404).json({ error: 'Country not found' });
    }
    res.status(200).json(countryById);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch country' });
  }
};

const getAllCountries = async (req, res) => {
  try {
    const allCountries = await country.find();
    res.status(200).json(allCountries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCountry,
  deleteCountry,
  updateCountry,
  getCountryById,
  getAllCountries
};