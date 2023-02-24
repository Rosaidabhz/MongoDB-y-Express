const express = require('express');
const ratingSchema = require('../models/rating');

const router = express.Router();


// create rating

router.post("/rating", (req,res) => {
    const rating = ratingSchema(req.body);
    rating
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//traer todo rating

router.get("/rating", (req, res) => {
    ratingSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

//traer rating por id

router.get('/rating/:id', (req, res) => {
  const { id } = req.params;
  ratingSchema
  .findOne({ rev_id: id })
  .then((rating) => {
    if (!rating) {
      return res.status(404).json({ message: `Rating with ID (rev_id) ${id} not found` });
      }
      res.json(rating);
  })
  .catch((error) => res.status(500).json({ message: error }));
});

//eliminar un Rating

router.delete('/rating/:id', (req, res) => {
  const { id } = req.params;
  ratingSchema
      .deleteOne({ _id: id })
      .then(() => res.json({ message: 'Rating deleted successfully' }))
      .catch((error) => res.status(500).json({ message: error }));
});

//actualizar un rating

router.put("/rating/:id", (req, res) => {
  const { id } = req.params;
  const { rev_id, mov_id, rev_stars, num_o_ratings} = req.body;
  movieDirectionSchema
    .updateOne({ rev_id: id }, { $set: { rev_id, mov_id, rev_stars, num_o_ratings }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});



module.exports = router;
