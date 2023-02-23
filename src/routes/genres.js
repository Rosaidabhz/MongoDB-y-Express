const express = require('express');
const genresSchema = require ('../models/genres');

const router = express.Router();

//Create a genre
router.post("/genres", (req,res) => {
    const movie= genresSchema(req.body);
    movie.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
})

// Get all genres
router.get("/genres", (req, res) => {
    genresSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

module.exports = router;