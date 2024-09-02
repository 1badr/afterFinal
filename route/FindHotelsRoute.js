/**
 * @swagger
 * components:
 *   schemas:
 *     Hotel:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The identifier for the hotel
 *         name:
 *           type: string
 *           description: The name of the hotel
 *         address:
 *           type: string
 *           description: The address of the hotel
 *         rating:
 *           type: number
 *           format: float
 *           description: The rating of the hotel
 *         amenities:
 *           type: array
 *           items:
 *             type: string
 *           description: List of amenities available at the hotel
 *         price:
 *           type: object
 *           properties:
 *             currency:
 *               type: string
 *               description: The currency of the price
 *             amount:
 *               type: number
 *               format: float
 *               description: The price amount
 *         imageUrl:
 *           type: string
 *           description: URL of the hotel image
 * /getHotels:
 *   get:
 *     summary: Retrieve a list of hotels
 *     tags: [Hotels]
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query for hotels
 *     responses:
 *       200:
 *         description: A list of hotels matching the search query
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Hotel'
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
 *   name: Hotels
 *   description: API for finding hotels
 */


const { Router} = require('express');
const FindHotels = require('../controller/FindHotelsController');
const router = Router();

router.get('/getHotels', FindHotels.getHotels);

module.exports = router