const { Router} = require('express');
const TourGuideController = require('../controller/TourGuideController');
const router = Router();

router.post('/createTourGuide', TourGuideController.createTourGuide);
router.delete('/deleteTourGuide/:id', TourGuideController.deleteTourGuide);
router.put('/updateTourGuide/:id', TourGuideController.updateTourGuide);
router.get('/getTourGuides', TourGuideController.getTourGuides);
router.get('/getTourGuideById/:id', TourGuideController.getTourGuideById);

module.exports = router