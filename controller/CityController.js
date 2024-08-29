const city = require('../model/CityModel');

const createCity = async (req, res) => {
  try {
    const newCity = new city(req.body);
    await newCity.save();
    res.status(201).json({ cityId: newCity._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCity = async (req, res) => {
  try {
    const { id } = req.params;
    await city.findByIdAndDelete(id);
    res.json({ message: 'City deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateCity = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCity = await city.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedCity);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const getCityById = async (req, res) => {
  try {
    const { id } = req.params;
    const cityById = await city.findById(id);
    if (!cityById) {
      return res.status(404).json({ error: 'City not found' });
    }
    res.status(200).json(cityById);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch city' });
  }
};

const getAllCities = async (req, res) => {
  try {
    const allCities = await city.find();
    res.status(200).json(allCities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCitiesByCountry = async (req, res) => {
  const { countryId } = req.params;

  try {
    const countryCities = await city.find({ countryId: countryId });
    res.status(200).json(countryCities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCity,
  deleteCity,
  updateCity,
  getCityById,
  getAllCities,
  getCitiesByCountry
};