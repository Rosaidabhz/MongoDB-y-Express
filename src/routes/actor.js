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

//Traer un actor por ID

router.get('/actor/:id', (req, res) => {
    const { id } = req.params;
    actorSchema
      .findOne({ act_id: id })
      .then((actor) => res.json(actor))
      .catch((error) => res.status(500).json({ message: error }));
  });
  


// ELIMINAR ACTOR
router.delete('/actor/:id', (req, res) => {
    const { id } = req.params;
    actorSchema
      .deleteOne({ act_id: id})
      .then(() => res.json({ message: 'Actor deleted successfully' }))
      .catch((error) => res.status(500).json({ message: error}));
  });

  //actualizar actor
router.put('/actor/:id', (req, res) => {
    const { id } = req.params;
    const { act_fname, act_lname, act_gender } = req.body;
    actorSchema
     .updateOne({ act_id: id }, { $set: { act_fname, act_lname, act_gender } })
     .then(() => res.json({ message: 'Actor updated successfully' }))
     .catch((error) => res.status(500).json({ message: error }));
});


module.exports = router;