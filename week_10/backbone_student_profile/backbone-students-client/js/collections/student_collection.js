directory.StudentCollection = Backbone.Collection.extend({
  model: directory.Student,
  url: "http://localhost:3000/students"
})

