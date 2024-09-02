/**
 * @swagger
 * components:
 *   schemas:
 *     Note:
 *       type: object
 *       required:
 *         - userId
 *         - tripPlanId
 *         - content
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the note
 *         userId:
 *           type: string
 *           description: The ID of the user who created the note
 *         tripPlanId:
 *           type: string
 *           description: The ID of the associated trip plan
 *         content:
 *           type: string
 *           description: The content of the note
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the note was created
 */

/**
 * @swagger
 * tags:
 *   name: Notes
 *   description: The notes managing API
 * /postNote:
 *   post:
 *     summary: Create a new note
 *     tags: [Notes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               tripPlanId:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Note created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 *       500:
 *         description: Some server error
 * /deleteNote/{id}:
 *   delete:
 *     summary: Remove the note by id
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The note id
 *     responses:
 *       200:
 *         description: The note was deleted
 *       404:
 *         description: The note was not found
 * /ubdatenote/{id}:
 *   put:
 *     summary: Update the note by the id
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The note id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               tripPlanId:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: The note was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 *       404:
 *         description: The note was not found
 *       500:
 *         description: Some error happened
 * /getNotes:
 *   get:
 *     summary: Lists all notes
 *     tags: [Notes]
 *     responses:
 *       200:
 *         description: A list of notes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Note'
 * /getNoteById/{id}:
 *   get:
 *     summary: Get the note by id
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The note id
 *     responses:
 *       200:
 *         description: The note response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 *       404:
 *         description: The note was not found
 */



const { Router} = require('express');
const NoteController = require('../controller/NoteController');
const router = Router();

router.post('/postNote', NoteController.postNote);
router.delete('/deleteNote/:id', NoteController.deleteNote);
router.put('/ubdatenote/:id', NoteController.ubdatenote);
router.get('/getNotes', NoteController.getNotes);
router.get('/getNoteById/:id', NoteController.getNoteById);

module.exports = router