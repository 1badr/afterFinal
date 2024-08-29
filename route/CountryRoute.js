const { Router} = require('express');
const CountryController = require('../controller/CountryController');
const router = Router();

router.post('/createCountry', CountryController.createCountry);
router.delete('/deleteCountry/:id', CountryController.deleteCountry);
router.put('/updateCountry/:id', CountryController.updateCountry);
router.get('/getAllCountries', CountryController.getAllCountries);
router.get('/getCountryById/:id', CountryController.getCountryById);

module.exports = router