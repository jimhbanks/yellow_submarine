var AppRouter = Backbone.Router.extend({
    routes: {
      "": "index",
      "animals/:id": "viewAnimal"
    },
    index: function(){
      var zooView = newooView({collection: myZoo});
      zooView.render();
    },
    viewAnimal: function(id){
      //Creating an animalView instance passing in an animal model
      var animalView = new zooApp.ZooView({model: zooApp.myZoo});
      animalView.render();
    }
  })

 