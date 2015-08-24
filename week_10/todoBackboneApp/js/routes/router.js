TodoApp.AppRouter = Backbone.Router.extend({
	routes: {
		"": "index"
	},
	index: function() {
		var todoListView = new TodoApp.TodoListView({collection: TodoApp.List});
		todoListView.render();
	}
})


