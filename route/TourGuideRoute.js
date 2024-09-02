/**
 * @swagger
 * components:
 *   schemas:
 *     TourGuide:
 *       type: object
 *       required:
 *         - userId
 *         - language
 *         - specialization
 *         - availability
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the tour guide
 *         userId:
 *           type: string
 *           description: The ID of the user who is the tour guide
 *         language:
 *           type: string
 *           description: The language spoken by the tour guide
 *         specialization:
 *           type: string
 *           description: The area of specialization of the tour guide
 *         availability:
 *           type: boolean
 *           description: The availability status of the tour guide
 *         profilePicture:
 *           type: string
 *           description: URL of the profile picture of the tour guide
 *         reviews:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               rating:
 *                 type: number
 *                 description: The rating given by the reviewer (1-5)
 *                 minimum: 1
 *                 maximum: 5
 *               reviewer:
 *                 type: string
 *                 description: The ID of the user who reviewed
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the tour guide was created
 */

/**
 * @swagger
 * tags:
 *   name: Tour Guides
 *   description: The tour guides managing API
 * /createTourGuide:
 *   post:
 *     summary: Create a new tour guide
 *     tags: [Tour Guides]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TourGuide'
 *     responses:
 *       201:
 *         description: The created tour guide
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TourGuide'
 *       500:
 *         description: Some server error
 * /deleteTourGuide/{id}:
 *   delete:
 *     summary: Remove the tour guide by id
 *     tags: [Tour Guides]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The tour guide id
 *     responses:
 *       200:
 *         description: The tour guide was deleted
 *       404:
 *         description: The tour guide was not found
 * /updateTourGuide/{id}:
 *   put:
 *     summary: Update the tour guide by the id
 *     tags: [Tour Guides]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The tour guide id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TourGuide'
 *     responses:
 *       200:
 *         description: The tour guide was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TourGuide'
 *       404:
 *         description: The tour guide was not found
 *       500:
 *         description: Some error happened
 * /getTourGuides:
 *   get:
 *     summary: Lists all the tour guides
 *     tags: [Tour Guides]
 *     responses:
 *       200:
 *         description: A list of tour guides
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TourGuide'
 * /getTourGuideById/{id}:
 *   get:
 *     summary: Get the tour guide by id
 *     tags: [Tour Guides]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The tour guide id
 *     responses:
 *       200:
 *         description: The tour guide response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TourGuide'
 *       404:
 *         description: The tour guide was not found
 */


const { Router} = require('express');
const TourGuideController = require('../controller/TourGuideController');
const router = Router();

router.post('/createTourGuide', TourGuideController.createTourGuide);
router.delete('/deleteTourGuide/:id', TourGuideController.deleteTourGuide);
router.put('/updateTourGuide/:id', TourGuideController.updateTourGuide);
router.get('/getTourGuides', TourGuideController.getTourGuides);
router.get('/getTourGuideById/:id', TourGuideController.getTourGuideById);

module.exports = router