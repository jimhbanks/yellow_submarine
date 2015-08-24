directory.ShellView = Backbone.View.extend({
  events: {
    "keyup .search-query" : "search"
  },
  initialize: function(){
    //complile the template and attach it to the shellview
    this.template = _.template($('#shell-template').html());
//forsearch adding a collection of students to the shell-list view
    this.searchResults = new directory.StudentCollection();
    this.searchResultsView = new directory.StudentListView({collection: this.searchResults, className: 'dropdown-menu'})
  $('body').click(function(){
    $('.dropdown').removeClass('open');
  });
  },

  render: function(){
    //tagName will be a default div, replace the html of the div with the compliled template
    this.$el.html(this.template());
    
    $('.navbar-search', this.el).append(this.searchResultsView.render().el);
    return this;
},
    search: function(){
    var searchData = $('#searchText').val();
    this.searchResults.fetch({
      reset: true,
      data: {name: searchData},
      success: function(data){
        console.log(data);
        console.log('Dave is a prick!')
        $('.dropdown').addClass('open');
     }
   })
  }
})