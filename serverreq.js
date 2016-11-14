var express = require('express');
var app = express();

app.get('/a', function(req, res){
  res.send('id: ' + req.query.id);
});

app.listen(3000);