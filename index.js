const express = require('express');

// set up express app
const app = express();

// initialize routes
app.use('/api',require('./routes/api'));

app.get('/', function(req,res){
  console.log("get request");
  res.send({name:'Yoshi'});
});

// listen for requests
app.listen(process.env.PORT || 4000, function(){
  console.log("listening for requests ");
});
