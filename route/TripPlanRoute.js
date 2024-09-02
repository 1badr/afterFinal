/**
 * @swagger
 * components:
 *   schemas:
 *     TripPlan:
 *       type: object
 *       required:
 *         - userId
 *         - country
 *         - city
 *         - startDate
 *         - endDate
 *         - budget
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the trip plan
 *         userId:
 *           type: string
 *           description: The ID of the user creating the trip plan
 *         country:
 *           type: string
 *           description: The country of the trip
 *         city:
 *           type: string
 *           description: The city of the trip
 *         startDate:
 *           type: integer
 *           description: The start date of the trip in Unix timestamp
 *         endDate:
 *           type: integer
 *           description: The end date of the trip in Unix timestamp
 *         budget:
 *           type: integer
 *           description: The budget allocated for the trip
 *         expenses:
 *           type: integer
 *           description: The total expenses incurred during the trip
 *         visit:
 *           type: array
 *           items:
 *             type: string
 *           description: Places to visit during the trip
 *         seen:
 *           type: array
 *           items:
 *             type: string
 *           description: Places already seen during the trip
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the trip plan was created
 */

/**
 * @swagger
 * tags:
 *   name: Trip Plans
 *   description: The trip plans managing API
 * /tripplan:
 *   get:
 *     summary: Lists all the trip plans
 *     tags: [Trip Plans]
 *     responses:
 *       200:
 *         description: The list of trip plans
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TripPlan'
 *   post:
 *     summary: Create a new trip plan
 *     tags: [Trip Plans]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TripPlan'
 *     responses:
 *       201:
 *         description: The created trip plan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TripPlan'
 *       500:
 *         description: Some server error
 * /tripplan/{id}:
 *   get:
 *     summary: Get the trip plan by id
 *     tags: [Trip Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The trip plan id
 *     responses:
 *       200:
 *         description: The trip plan response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TripPlan'
 *       404:
 *         description: The trip plan was not found
 *   put:
 *     summary: Update the trip plan by the id
 *     tags: [Trip Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The trip plan id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TripPlan'
 *     responses:
 *       200:
 *         description: The trip plan was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TripPlan'
 *       404:
 *         description: The trip plan was not found
 *       500:
 *         description: Some error happened
 *   delete:
 *     summary: Remove the trip plan by id
 *     tags: [Trip Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The trip plan id
 *     responses:
 *       200:
 *         description: The trip plan was deleted
 *       404:
 *         description: The trip plan was not found
 */



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