var REPL = require('repl');
var db = require('./model');

var repl = REPL.start('jim and jim >');
repl.context.db =db;

db.Post.collection.remove();
db.Comment.collection.remove();


title: 'Test',
 author: 'Test McTesterson',
 content: 'Lorem ipsum dolor sit amet.'
}, function(err, blog){
 console.log('blog created');
 console.log(blog);
 db.Comment.create({
   title: 'comment test',
   author: 'Commy McComments',
   content: 'rah rah rah rah rah'
 }, function(err, comment){
    console.log('comment created');
    console.log(comment);
    blog.comments.push(comment);
    blog.save()
 });

});




// var post1 = db.Post.create ({
//   title: 'I thought you could eat chicken raw',
//   content: 'you cannot, you get really really ill, you cannot, you get really really ill you cannot, you get really really ill you cannot, you get really really ill you cannot, you get really really ill you cannot, you get really really ill you cannot, you get really really ill'
// }, 
//   function(err, post){
//   console.log('Post created');
//   db.Comment.create({
//     comment: 'you have very bad choices in what you eat raw'
//   }, 
//     function(err, comment){
//     console.log('Comment created');
//     console.log(comment);
//     post.comments.push(comment);
//     post.save();
//   });

//   db.Comment.create({
//     comment: 'Jim'
//   }, 
//     function(err, comment){
//     console.log('Comment created');
//     console.log(comment);
//     post.comments.push(comment);
//     post.save();
//     console.log('post saved?')
//     post.comments.push(comment)
//   });
// });

// var comment1 = db.Comment.create({
//  author: 'Jimongo Banko',
//  content: 'I cook my chicken'
// }, function(err, comment){
//    db.Blog.create({
//      name: 'cook chicken first', 
//      content: 'try putting the pan on heat, AND THEN put the chicken in', 
//      comments: [comment]
//    }, function(err, blog){
//      console.log(blog);
//    })
// ;})





