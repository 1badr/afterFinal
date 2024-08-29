const { Router} = require('express');
const CityController = require('../controller/CityController');
const router = Router();

router.post('/createCity', CityController.createCity);
router.delete('/deleteCity/:id', CityController.deleteCity);
router.put('/updateCity/:id', CityController.updateCity);
router.get('/getAllCities', CityController.getAllCities);
router.get('/getCitiesByCountry/:id', CityController.getCitiesByCountry);

module.exports = router