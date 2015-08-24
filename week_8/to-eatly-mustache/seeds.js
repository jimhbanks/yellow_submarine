var REPL = require('repl');
var db = require('./models');

//starts the repl and assigns prompt
var repl = REPL.start("Foods >");
//setting the context of the data to be a foodsdatabase
repl.context.db = db;

//Remove all documents from the collections
db.Food.collection.remove();

db.Food.create({
  name: 'Prawn Cocktail', yumminness: 'Umm'}, function(err, food){
  console.log('Food Created');
  console.log('food');
});

db.Food.create({name: 'Chicken Pie', yumminness: 'Very'}, function(err, food){
  console.log('Food Created');
  console.log('food');
  console.log('Database Seeded');
//once the second object has been created we going to exit the model
  process.exit();
})