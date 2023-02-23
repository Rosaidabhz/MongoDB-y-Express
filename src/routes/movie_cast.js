const express = require('express');
const movieCastSchema = require('../models/movie_cast');

const router = express.Router();

router.post("/movie_cast", (req,res) => {
    const movieCast = movieCastSchema(req.body);
    movieCast.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
})

router.get("/movie_cast", (req, res) => {
    movieCastSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;
