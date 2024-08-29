const { Router} = require('express');
const BestHotelsController = require('../controller/BestController');
const router = Router();

router.get('/getTopRatedByType', BestHotelsController.getTopRatedByType);

module.exports = router