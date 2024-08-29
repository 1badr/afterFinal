const note = require('../model/NoteModel');
const postNote = async (req, res) => {
    const notes = new note(req.body);
    notes.save()
      .then((result) => {
        res.status(201).json({ notes: notes._id });
      });
  };

  
const deleteNote = (req, res) => {
    const id = req.params.id ;
  
    note.findByIdAndDelete(id)
    .then(result => {
      res.json();
    })
    .catch(err => {
      console.log(err);
    })
  };
 

  const ubdatenote = (req, res) => {
    const id = req.params.id;
    const ubdatenote = req.body;
  
    note.findByIdAndUpdate(id, ubdatenote, { new: true })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err.message });
      });
  };
  
  const getNotes = async (req, res) => {
  
    try {
      const notes = await note.find();
  
      res.status(200).json({notes})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const getNoteById = async (req, res) => {
      try {
        const notes = await note.findById(req.params.id);
        res.status(200).json(notes);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch note' });
      }
    };


module.exports = {
    postNote,
    deleteNote,
    ubdatenote,
    getNotes,
    getNoteById
  };