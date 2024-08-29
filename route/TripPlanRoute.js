const { Router} = require('express');
const TripPlanController = require('../controller/TripPlanController');
const router = Router();

router.post('/createTripPlan', TripPlanController.createTripPlan);
router.delete('/deleteTripPlan/:id', TripPlanController.deleteTripPlan);
router.put('/updateTripPlan/:id', TripPlanController.updateTripPlan);
router.get('/getTripPlanById/:id', TripPlanController.getTripPlanById);
router.get('/getTripRemainingDays/:id', TripPlanController.getTripRemainingDays);
router.get('/getMoney/:id', TripPlanController.getMoney);
router.get('/getAllTripPlan', TripPlanController.getAllTripPlan);
router.get('/getTripPlanBy/:id', TripPlanController.getTripPlanBy);
router.get('/getTripPlansForUser/:id', TripPlanController.getTripPlansForUser);

module.exports = router