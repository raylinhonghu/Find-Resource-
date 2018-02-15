const express = require('express');

const router = express.Router();

// get a list of ninjas from db
router.get('/ninjas',function(req,res){
  res.send({type:'GET'});
});

// add a new ninja
router.post('/ninjas',function(req,res){
  res.send({type:'POST'});
});

// update ninja
router.put('/ninjas/:id',function(req,res){
  res.send({type:'PUT'});
});

// delete ninja
router.delete('/ninjas/:id',function(req,res){
  res.send({type:'DELETE'});
});

module.exports = router;
