const express = require('express');
const genresSchema = require ('../models/genres');

const router = express.Router();

// Crear un nuevo genero

router.post("/genres", (req,res) => {
    const movie= genresSchema(req.body);
    movie.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
})

// Traer todos los generos

router.get("/genres", (req, res) => {
    genresSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

// eliminar un genero
router.delete('/genres/:id', (req, res) => {
    const { id } = req.params;
    genresSchema
        .deleteOne({ gen_id: id })
        .then(() => res.json({ message: 'Genre deleted successfully' }))
        .catch((error) => res.status(500).json({ message: error }));
});

// actualizar un genero

router.put('/genres/:id', (req, res) => {
  const { id } = req.params;
  const {gen_title} = req.body;
  genresSchema
  .updateOne({gen_id:id}, { $set: {gen_title} })
  .then((data) => res.json({ message: 'Genres updated successfully', data }))
  .catch((error) => res.json({message:error}));

});


// traer un genero por id
router.get('/genres/:id', (req, res) => {
    const { id } = req.params;
    genresSchema
      .findById(id)
      .then((genre) => {
        if (!genre) {
          return res.status(404).json({ message: 'Genre not found' });
        }
        return res.json(genre);
      })
      .catch((error) => res.status(500).json({ message: error }));
  });
  
module.exports = router;