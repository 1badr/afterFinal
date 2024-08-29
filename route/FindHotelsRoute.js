const { Router} = require('express');
const FindHotels = require('../controller/FindHotelsController');
const router = Router();

router.get('/getHotels', FindHotels.getHotels);

module.exports = router