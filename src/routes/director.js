const express = require('express');
const directorSchema = require('../models/director');

const router = express.Router();

router.post("/director", (req,res) => {
    const director = directorSchema(req.body);
    director.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
})

router.get("/director", (req, res) => {
    directorSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router;
