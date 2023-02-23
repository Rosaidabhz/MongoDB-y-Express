const express = require('express');
const directorSchema = require('../models/director');

const router = express.Router();

//CREATE  DIRECTOR


router.post("/director", (req,res) => {
    const director = directorSchema(req.body);
    director.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
})


// TRAER TODOS LOS DIRECTORES

router.get("/director", (req, res) => {
    directorSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// traer un director por su id

router.get('/director/:id', (req, res) => {
  const { id } = req.params;
  directorSchema
  .findOne({ dir_id: id })
  .then((director) => {
    if (!director) {
      return res.status(404).json({ message: `Director with ID ${id} not found` });
      }
      res.json(director);
  })
  .catch((error) => res.status(500).json({ message: error }));
});

  // ELIMINAR DIRECTOR
router.delete('/director/:id', (req, res) => {
  const { id } = req.params;
  directorSchema
    .deleteOne({dir_id: id})
    .then(() => res.json({ message: 'Director deleted successfully' }))
    .catch((error) => res.status(500).json({ message: error}));
});

// ACTUALIZAR DIRECTOR

router.put('/director/:id', (req, res) => {
  const { id } = req.params;
  const { dir_fname, dir_lname } = req.body;
  directorSchema
      .updateOne({ dir_id: id }, { $set: { dir_fname, dir_lname } })
      .then(() => res.json({ message: 'Director updated successfully' }))
      .catch((error) => res.status(500).json({ message: error }));
});



module.exports = router;
