directory.Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "students/:id": "studentDetails"
  },
  initialize: function(){
    console.log('init')
    directory.shellView = new directory.ShellView();
    $('body').html(directory.shellView.render().el);

  },
  home: function(){
    directory.homeView = new directory.HomeView();
    $('#content').html(directory.homeView.render().el);
  },
  studentDetails: function(id){
    var student = new directory.Student({id: id});
    var _this = this;
    student.fetch({
      success:function(data){
        console.log(data);
          $('#content').html(new directory.StudentView({model: data}).render().el)
      }
    })
  }
})
// debugger;