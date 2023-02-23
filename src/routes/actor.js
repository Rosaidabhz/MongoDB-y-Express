const express = require('express');
const actorSchema = require('../models/actor');

const router = express.Router();


//CREATE  ACTOR

router.post("/actor", (req, res) => {
    const actor = actorSchema(req.body);
    actor.save().then((data) => res.json(data)).catch((error) => res.json({message: error}))
});

// TRAER TODOS LOS ACTORES

router.get("/actor", (req, res) => {
    actorSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});


// ELIMINAR ACTOR


module.exports = router;