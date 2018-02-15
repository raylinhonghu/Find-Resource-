const express = require('express');

// set up express app
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// initialize routes
app.use('/api',require('./routes/api'));

// error handling middleware
app.use(function(err,req,res,next){
  res.status(422).send({error:err.message})
})
// listen for requests
app.listen(process.env.PORT || 4000, function(){
  console.log("listening for requests ");
});
