TodoApp.TodoListView = Backbone.View.extend({
	el: '#list',
	events: {'submit form#add': 'createTask'},
	initialize: function(){
		this.collection.bind('add remove change', this.render, this)
	},
	render: function(){
		var taskList =  $('#taskList');
		taskList.empty();
		this.collection.each(function(task){
			var taskView = new TodoApp.TaskView({model: task});
			taskList.prepend(taskView.render().el);
		});
	},
	add: function(task){
		var task = new TodoApp.Task({task: task});
		this.collection.add(task);
		console.log(this.collection.length);
	},
	createTask: function(event){
		event.preventDefault();
		var task = $('#task');
		this.add(task.val());
		task.val('');
	}


})