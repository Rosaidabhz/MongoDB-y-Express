const express = require('express');
const reviewerSchema = require('../models/reviewer');

const router = express.Router();


// create reviewer

router.post("/reviewer", (req,res) => {
    const reviewer = reviewerSchema(req.body);
    reviewer
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

//traer todo reviewer

router.get("/reviewer", (req, res) => {
    reviewerSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

//traer rating por id

router.get('/reviewer/:id', (req, res) => {
  const { id } = req.params;
  reviewerSchema
    .findById(id)
    .then((rating) => res.json(rating))
    .catch((error) => res.status(500).json({ message: error }));
});

//delete a reviewer

router.delete('/reviewer/:id', (req, res) => {
  const { id } = req.params;
  reviewerSchema
      .deleteOne({ _id: id })
      .then(() => res.json({ message: 'Reviewer deleted successfully' }))
      .catch((error) => res.status(500).json({ message: error }));
});

//updating a reviewer

router.put("/reviewer/:id", (req, res) => {
  const { id } = req.params;
  const { rev_id, rev_name } = req.body;
  movieDirectionSchema
    .updateOne({ rev_id: id }, { $set: { rev_id, rev_name }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
