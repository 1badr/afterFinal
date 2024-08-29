const { Router} = require('express');
const NoteController = require('../controller/NoteController');
const router = Router();

router.post('/postNote', NoteController.postNote);
router.delete('/deleteNote/:id', NoteController.deleteNote);
router.put('/ubdatenote/:id', NoteController.ubdatenote);
router.get('/getNotes', NoteController.getNotes);
router.get('/getNoteById/:id', NoteController.getNoteById);

module.exports = router