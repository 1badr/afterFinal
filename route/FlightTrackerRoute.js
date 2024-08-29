const { Router} = require('express');
const FlightTrackerController = require('../controller/FlightTrackerController');
const router = Router();

router.get('/getFlights', FlightTrackerController.getFlights);
router.post('/searchFlightsByDate', FlightTrackerController.searchFlights);

module.exports = router