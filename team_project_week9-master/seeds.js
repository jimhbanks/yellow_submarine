var REPL = require('repl');
var db = require('./models');

var repl = REPL.start('Member > ');
repl.context.db = db;

db.User.collection.remove();
db.Game.collection.remove();
// db.Platform.collection.remove();
// db.Review.collection.remove();

var g1 = db.Game.create({
  id_api:18673,
  name:"Pokémon Yellow"
});

var g2 = db.Game.create({
  id_api:1629,
  name:"Call of Duty"
});

db.User.create({
  username: 'KaranNakai',
  games: [g1,g2]
});
