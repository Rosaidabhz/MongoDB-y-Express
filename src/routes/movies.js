const express = require('express');
const moviesSchema = require("../models/movies")

const router = express.Router(); 


//CREATE MOVIE
router.post('/movies', (req, res) => {
    const movies = moviesSchema(req.body);
    movies
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})


//GET MOVIES ALL MOVIES
router.get('/movies', (req, res) => {
    moviesSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})


//GET MOVIE By ID
router.get('/movies/:id', (req, res) => {
    const { id } = req.params;
    moviesSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//UPDATE A MOVIE 
router.put('/movies/:id', (req, res) => {
    const { id } = req.params;
    const { title, year, mov_time, mov_lang, mov_dt_rel, mov_rel_country } = req.body;
    moviesSchema
        .updateOne({_id: id}, {$set: {title, year, mov_time, mov_lang, mov_dt_rel, mov_rel_country} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

//DELETE A MOVIE 
router.delete('/movies/:id', (req, res) => {
    const { id } = req.params;
    moviesSchema
        .remove({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))

})

module.exports = router;