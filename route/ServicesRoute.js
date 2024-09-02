/**
 * @swagger
 * components:
 *   schemas:
 *     Service:
 *       type: object
 *       required:
 *         - cityId
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the service
 *         cityId:
 *           type: string
 *           description: The ID of the city where the service is located
 *         name:
 *           type: string
 *           description: The name of the service
 *         Description:
 *           type: string
 *           description: A detailed description of the service
 *         type:
 *           type: string
 *           enum: ['Historical place', 'Archaeological site', 'Tourist attraction', 'Restaurant', 'Cafe']
 *           description: The type of service
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the service was created
 */

/**
 * @swagger
 * tags:
 *   name: Services
 *   description: The services managing API
 * /createService:
 *   post:
 *     summary: Create a new service
 *     tags: [Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cityId:
 *                 type: string
 *               name:
 *                 type: string
 *               Description:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: ['Historical place', 'Archaeological site', 'Tourist attraction', 'Restaurant', 'Cafe']
 *     responses:
 *       201:
 *         description: Service created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 *       500:
 *         description: Some server error
 * /deleteService/{id}:
 *   delete:
 *     summary: Remove the service by id
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The service id
 *     responses:
 *       200:
 *         description: The service was deleted
 *       404:
 *         description: The service was not found
 * /updateService/{id}:
 *   put:
 *     summary: Update the service by id
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The service id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cityId:
 *                 type: string
 *               name:
 *                 type: string
 *               Description:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: ['Historical place', 'Archaeological site', 'Tourist attraction', 'Restaurant', 'Cafe']
 *     responses:
 *       200:
 *         description: The service was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 *       404:
 *         description: The service was not found
 *       500:
 *         description: Some error happened
 * /getAllServices:
 *   get:
 *     summary: Lists all services
 *     tags: [Services]
 *     responses:
 *       200:
 *         description: A list of services
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Service'
 * /getServiceById/{id}:
 *   get:
 *     summary: Get the service by id
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The service id
 *     responses:
 *       200:
 *         description: The service response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 *       404:
 *         description: The service was not found
 * /services/city/{cityId}:
 *   get:
 *     summary: Get services by city
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: cityId
 *         schema:
 *           type: string
 *         required: true
 *         description: The city ID to get services for
 *     responses:
 *       200:
 *         description: A list of services in the specified city
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Service'
 *       404:
 *         description: No services found for the specified city
 */



const { Router} = require('express');
const ServicesController = require('../controller/ServicesController');
const router = Router();

router.post('/createService', ServicesController.createService);
router.delete('/deleteService/:id', ServicesController.deleteService);
router.put('/updateService/:id', ServicesController.updateService);
router.get('/getAllServices', ServicesController.getAllServices);
router.get('/getServiceById/:id', ServicesController.getServiceById);

module.exports = router