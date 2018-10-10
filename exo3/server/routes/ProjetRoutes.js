const express = require('express');
const app = express();
const ProjetRouter = express.Router();

const Projet = require('../models/Projet');

ProjetRouter.route('/add').post(function (req, res) {
  const projet = new Projet(req.body);
  projet.save()
    .then(projet => {
        res.json('projet ajouté');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

ProjetRouter.route('/').get(function (req, res) {
    Projet.find(function (err, serverports){
    if(err){
      console.log(err);
    }
    else {
      res.json(serverports);
    }
  });
});

ServerPortRouter.route('/edit/:id').get(function (req, res) {
  const id = req.params.id;
  ServerPort.findById(id, function (err, serverport){
      res.json(serverport);
  });
});

ServerPortRouter.route('/update/:id').post(function (req, res) {
    ServerPort.findById(req.params.id, function(err, serverport) {
    if (!serverport)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      serverport.nom = req.body.nom;
      serverport.age = req.body.age;
      serverport.type = req.body.type;

      serverport.save().then(serverport => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

ServerPortRouter.route('/delete/:id').get(function (req, res) {
    ServerPort.findByIdAndRemove({_id: req.params.id},
       function(err, serverport){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = ServerPortRouter;
