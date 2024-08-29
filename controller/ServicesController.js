const services = require('../model/ServicesModel');

const createService = async (req, res) => {
  try {
    const newService = new services(req.body);
    await newService.save();
    res.status(201).json({ serviceId: newService._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    await services.findByIdAndDelete(id);
    res.json({ message: 'Service deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedService = await services.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedService);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const serviceById = await services.findById(id);
    if (!serviceById) {
      return res.status(404).json({ error: 'Service not found' });
    }
    res.status(200).json(serviceById);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch service' });
  }
};

const getAllServices = async (req, res) => {
  try {
    const allServices = await services.find();
    res.status(200).json(allServices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getServicesByCity = async (req, res) => {
  const { cityId } = req.params;
  
  try {
    const cityServices = await services.find({ cityId: cityId });
    res.status(200).json(cityServices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createService,
  deleteService,
  updateService,
  getServiceById,
  getAllServices,
  getServicesByCity
};