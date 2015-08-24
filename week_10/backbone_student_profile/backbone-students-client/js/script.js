var directory =  {};
$(document).ready(function(){
  directory.router = new directory.Router();
  //Listen for changes in the hash fragment of the url
  Backbone.history.start();
});