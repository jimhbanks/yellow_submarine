var ZooView = Backbone.View.extend({
    el: '#main',
    initialize: function(){
      console.log('initialize called :-)')
      this.template = _.template($('#animal-template').html());
      // console.log(this.template);
    },
    render: function(){
      this.$el.html('<h1>Welcome to the Zoo</h1>');
      this.$el.append('<ul id="animals"></ul>');
      var view = this;
      this.collection.each(function(animal){
        //Inside the block the context of this changes back to the window, we need to store this in a variable on line 37 and refer to it;
        $('#animals').append(view.template(animal.toJSON()));
      })
    }
  });