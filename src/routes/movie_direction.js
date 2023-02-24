const express = require('express');
const movieDirectionSchema = require('../models/movie_direction');

const router = express.Router();


// create movie direction

router.post("/movie_direction", (req,res) => {
    const movieDirection = movieDirectionSchema(req.body);
    movieDirection
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//traer todo movie Direction

router.get("/movie_direction", (req, res) => {
    movieDirectionSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

//traer movie direction por id

router.get('/movie_direction/:id', (req, res) => {
  const { id } = req.params;
  movieDirectionSchema
  .findOne({ dir_id: id })
  .then((movieDirection) => {
    if (!movieDirection) {
      return res.status(404).json({ message: `Movie direction with ID ${id} not found` });
      }
      res.json(movieDirection);
  })
  .catch((error) => res.status(500).json({ message: error }));
});

//eliminar un Movie Direction

router.delete('/movie_direction/:id', (req, res) => {
  const { id } = req.params;
  movieDirectionSchema
      .deleteOne({ _id: id })
      .then(() => res.json({ message: 'Movie Direction deleted successfully' }))
      .catch((error) => res.status(500).json({ message: error }));
});

//actualizar un movie direction

router.put("/movie_direction/:id", (req, res) => {
  const { id } = req.params;
  const { dir_id, mov_id } = req.body;
  movieDirectionSchema
    .updateOne({ dir_id: id }, { $set: { dir_id, mov_id }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


module.exports = router;
