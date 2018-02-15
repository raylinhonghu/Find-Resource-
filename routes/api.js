const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninjas');
// get a list of ninjas from db
router.get('/ninjas',function(req,res,next){
  res.send({type:'GET'});
  console.log(req.body);
});

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
  res.send({type:'PUT'});
});

// delete ninja
router.delete('/ninjas/:id',function(req,res,next){
  Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
    res.send(ninja);
  })
});

module.exports = router;
