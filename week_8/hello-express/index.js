var express =  require('express');
var app = express();

var burgers = ['Double bacon bonaza', 'Le big mac', 'Royale with cheese'] 

var burritos = ['chicken', 'beef', 'pork', 'veg']

app.get('/', function(req, res){
  res.send('Heelloo Wirld');
});

app.get('/burgers', function(req, res){
  res.send(burgers.join(', '));
});

app.get('/burgers/:id', function(req, res){
  res.send(burgers[req.params.number -1]);
});

app.get('/burritos', function(req, res){
  res.send(burritos.join(', '));
});

app.get('/burritos/:id', function(req, res){
  res.send(burritos[req.params.number -1]);
});

app.get('/users/:username', function(req, res){
  console.log(req.params);
  res.send('oh, ding dong' + req.params.username)
});

app.get('/thank', function(req, res){
  var name = req.query.name;
  res.send('thankyou kind stranger! or' + name);
});

app.listen(3000, function(){
  console.log('Server started on http://localhost:3000');
});