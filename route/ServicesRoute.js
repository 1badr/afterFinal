const { Router} = require('express');
const ServicesController = require('../controller/ServicesController');
const router = Router();

router.post('/createService', ServicesController.createService);
router.delete('/deleteService/:id', ServicesController.deleteService);
router.put('/updateService/:id', ServicesController.updateService);
router.get('/getAllServices', ServicesController.getAllServices);
router.get('/getServiceById/:id', ServicesController.getServiceById);

module.exports = router