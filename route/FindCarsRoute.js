/**
 * @swagger
 * components:
 *   schemas:
 *     Car:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The identifier for the car
 *         model:
 *           type: string
 *           description: The model of the car
 *         make:
 *           type: string
 *           description: The manufacturer of the car
 *         year:
 *           type: integer
 *           description: The year the car was manufactured
 *         price:
 *           type: number
 *           format: float
 *           description: The rental price of the car
 *         mileage:
 *           type: number
 *           format: float
 *           description: The mileage of the car
 *         imageUrl:
 *           type: string
 *           description: URL of the car image
 * /fetchCars:
 *   get:
 *     summary: Retrieve a list of cars
 *     tags: [Cars]
 *     parameters:
 *       - in: query
 *         name: model
 *         schema:
 *           type: string
 *         description: The model of the car to search for (default is 'corolla')
 *     responses:
 *       200:
 *         description: A list of cars matching the search criteria
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Car'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 * /bookCar:
 *   post:
 *     summary: Book a car
 *     tags: [Cars]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rentalDetails:
 *                 type: object
 *                 description: Details required to book the car
 *                 additionalProperties: true
 *     responses:
 *       200:
 *         description: Successful car booking
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Confirmation message
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 */

/**
 * @swagger
 * tags:
 *   name: Cars
 *   description: API for finding and booking cars
 */



const { Router} = require('express');
const FindCarsController = require('../controller/FindCarsController');
const router = Router();

router.get('/fetchCars', FindCarsController.fetchCars);
router.post('/bookCar', FindCarsController.bookCar);

module.exports = router