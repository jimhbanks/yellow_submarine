$(document).ready(function(){
  // console.log('connected');
//define the blog classes
var id = 0;
var Blog = Backbone.Model.extend({
  //default settings
    defaults: {
    author: 'xx',
    title: 'xx',
    content: 'xx',
  },
  initialize: function(){
    console.log('init run');
    this.set('blogID', id++);
    this.on('change:content', function(instance){
      alert('this blog is by ' + instance.get('author') + ' is titled ' + instance.get('title'))
  })
}
});

// create some blog entries for testing
var blog1 = new Blog({author: 'Jim Banks', title: 'Is dog food ok for humans?', content: 'of course not, but would be ok to eat in a zombir life or death post apocolytpic situation, but be aware...'})
var blog2 = new Blog({author: 'David James', title: 'The pros and cons of self cleaning', content: 'I often find it hard to get behind my ears, I find that doing a yoga like pose can....'});
var blog3 = new Blog({author: 'Ben Frisbe', title: 'Can a human play catch?', content: 'Its not rare for me to run after a ball I threw for my dog, its like a 6th sense I.....'});

//defining a collection class for the blog posts
var DogBlog = Backbone.Collection.extend({
  model: Blog
});
// create a new collection instance for the blog....collection....
var myDogBlog = new DogBlog([blog1, blog2, blog3]);
// create a view for blog collection
var DogBlogView = Backbone.View.extend({
  el: '#main',
  initialize: function(){
      console.log('initialize has been called')
      this.template = _.template($('#blog-template').html());
      // console.log(this.template);
    },
    render: function(){
      this.$el.html('<h1>Backbone blog about dog(s)/h1>');
      this.$el.append('<ul id="blogs"></ul>');
      var view = this;
      this.collection.each(function(blog){
        //the line below talks to line 37 and stores as a var
        $('#blogs').append(view.template(blog.toJSON()));
      })
    }
  });

//create a viewing class

var BlogView = Backbone.View.extend({
  el:'#main',
  events: {
    'click li': 'blogClicked'
  },
  initialize: function(){
    //collecting the template into a func to show on html page
    this.template = _.template($('#blog-view-template').html());
  },
  render: function(){
    //talking back to line 27 (collection instance)
  this.$el.html(this.template(this.model.toJSON()));
  },
  blogClicked: function(){
    console.log(this.model.get('title') + ' clicked');
  }
})


//define the router

var AppRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    "blogs/:id": "viewBlog"
  },
  index: function(){
    var blogView = new DogBlogView({collection: myBlog});
    blogView.render();
  },
  viewBlog: function(id){
    var blogView = new DogBlogView({model: myBlog.at(id)});
    blogView.render();
  }
})

var router = new AppRouter();

Backbone.history.start();






  //below is end of doc.ready
});