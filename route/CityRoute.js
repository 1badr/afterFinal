/**
 * @swagger
 * components:
 *   schemas:
 *     City:
 *       type: object
 *       required:
 *         - countryId
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The identifier for the city
 *         countryId:
 *           type: string
 *           description: The ID of the country the city belongs to
 *         name:
 *           type: string
 *           description: The name of the city
 *         description:
 *           type: string
 *           description: A description of the city
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the city was created
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the city was last updated
 * /createCity:
 *   post:
 *     summary: Create a new city
 *     tags: [Cities]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/City'
 *     responses:
 *       201:
 *         description: The created city
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 cityId:
 *                   type: string
 *                   description: The ID of the created city
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
 * /deleteCity/{id}:
 *   delete:
 *     summary: Delete a city by ID
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the city to delete
 *     responses:
 *       200:
 *         description: City deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Confirmation message
 *       404:
 *         description: City not found
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
 * /updateCity/{id}:
 *   put:
 *     summary: Update a city by ID
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the city to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/City'
 *     responses:
 *       200:
 *         description: The updated city
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/City'
 *       404:
 *         description: City not found
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
 * /getAllCities:
 *   get:
 *     summary: Retrieve all cities
 *     tags: [Cities]
 *     responses:
 *       200:
 *         description: A list of cities
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/City'
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
 * /getCitiesByCountry/{id}:
 *   get:
 *     summary: Get all cities for a specific country
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the country
 *     responses:
 *       200:
 *         description: A list of cities in the specified country
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/City'
 *       404:
 *         description: No cities found for the specified country
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
 *   name: Cities
 *   description: API for managing cities
 */


const { Router} = require('express');
const CityController = require('../controller/CityController');
const router = Router();

router.post('/createCity', CityController.createCity);
router.delete('/deleteCity/:id', CityController.deleteCity);
router.put('/updateCity/:id', CityController.updateCity);
router.get('/getAllCities', CityController.getAllCities);
router.get('/getCitiesByCountry/:id', CityController.getCitiesByCountry);

module.exports = router