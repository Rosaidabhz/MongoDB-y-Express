const express = require('express');
const movieCastSchema = require('../models/movie_cast');

const router = express.Router();

// crear movie cast

router.post("/movie_cast", (req,res) => {
    const movieCast = movieCastSchema(req.body);
    movieCast.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
})

//traer todo movie cast

router.get("/movie_cast", (req, res) => {
    movieCastSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

//traer movie cast por id

router.get('/movie_cast/:id', (req, res) => {
  const { id } = req.params;
  movieCastSchema
    .findById(id)
    .then((movieCast) => res.json(movieCast))
    .catch((error) => res.status(500).json({ message: error }));
});

//eliminar un movie cast

router.delete('/movie_cast/:id', (req, res) => {
  const { id } = req.params;
  movieCastSchema
      .deleteOne({ _id: id })
      .then(() => res.json({ message: 'MovieCast deleted successfully' }))
      .catch((error) => res.status(500).json({ message: error }));
});

//actualizar un movie cast

router.put('/movie_cast/:id', (req, res) => {
  const { id } = req.params;
  const { act_id, mov_id, role } = req.body;
movieCastSchema
.findOneAndUpdate({ _id: id }, { act_id, mov_id, role }, { new: true })
.then((updatedDocument) => {
  if (!updatedDocument) {
    return res.status(404).json({ message: 'Movie cast not found' });
  }
  res.json(updatedDocument);
})
.catch((error) => res.status(500).json({ message: error }));

});


module.exports = router;
