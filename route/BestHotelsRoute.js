/**
 * @swagger
 * components:
 *   schemas:
 *     BestHotel:
 *       type: object
 *       required:
 *         - hotelId
 *         - rating
 *         - type
 *       properties:
 *         id:
 *           type: string
 *           description: The identifier for the best hotel entry
 *         hotelId:
 *           type: string
 *           description: The ID of the hotel
 *         rating:
 *           type: number
 *           format: float
 *           description: The rating of the hotel
 *         reviews:
 *           type: string
 *           description: Customer reviews for the hotel
 *         type:
 *           type: string
 *           enum: [hotel, car, flight]
 *           description: The type of the entry (hotel, car, flight)
 * /getTopRatedByType:
 *   get:
 *     summary: Retrieve top-rated items grouped by type
 *     tags: [Best Hotels]
 *     responses:
 *       200:
 *         description: A list of top-rated items grouped by type
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 hotel:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/BestHotel'
 *                 car:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/BestHotel'
 *                 flight:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/BestHotel'
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
 *   name: Best Hotels
 *   description: API for retrieving the best-rated hotels, cars, and flights
 */


const { Router} = require('express');
const BestHotelsController = require('../controller/BestController');
const router = Router();

router.get('/getTopRatedByType', BestHotelsController.getTopRatedByType);

module.exports = router