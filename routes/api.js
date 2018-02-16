const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninjas');
// get a list of ninjas from db
router.get('/ninjas',function(req,res,next){
  // Ninja.find({}).then(function(ninjas) {
  //   res.send(ninjas);
  // })
  Ninja.aggregate().near({
    near: { type: "Point", coordinates: [parseFloat(req.query.lng) , parseFloat(req.query.lat)] },
            distanceField: "dist.calculated",
            maxDistance: 100000,
            spherical: true
    }).then(function(ninjas){
        res.send(ninjas);
    }).catch(next);
});﻿

// add a new ninja
router.post('/ninjas',function(req,res,next){
  // equivalent to Ninja.create(req.body)
  // var ninja = new Ninja(req.body);
  // ninja.save();
  Ninja.create(req.body).then(function(ninja){
    res.send(ninja);
  }).catch(next);
});

// update ninja
router.put('/ninjas/:id',function(req,res,next){
  Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
    Ninja.findOne({_id:req.params.id}).then(function(ninja) {
      res.send(ninja);
    });
  });
});

// delete ninja
router.delete('/ninjas/:id',function(req,res,next){
  Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
    res.send(ninja);
  })
});

module.exports = router;
