$(document).ready(function(){
  //Defining the animal class
  zooApp.id = 0;
  
  //Creating animal instances
  var animal1 = new zooApp.Animal({ecosystem: 'mars', stripes: 1, gender: 'male', type: 'loris'})
  var animal2 = new zooApp.Animal({ecosystem:'rainforest', stripes: 3, gender: 'female', type: 'frog'});
  var animal3 = new zooApp.Animal({ecosystem: 'savannah', stripes: 200, gender: 'male', type: 'zebra'});
 
  //Create a new collection instance
  zooApp.myZoo = new zooApp.Zoo([animal1, animal2, animal3]);

  //Create a new router instance
  var router = new AppRouter();
  //Watching url hash fragment for changes
  Backbone.history.start();
})







