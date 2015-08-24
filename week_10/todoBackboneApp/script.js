

//Creating task
todo1 = new TodoApp.Task({task: 'Nail a nail into an inaminate object'});
todo2 = new TodoApp.Task({task: 'Get GP checkup'});
todo3 = new TodoApp.Task({task: 'Check gas meter'});
todo4 = new TodoApp.Task({task: 'Eat an apple'});
todo5 = new TodoApp.Task({task: 'Have a bath'});

//Creating a collection
TodoApp.List = new TodoApp.TodoList([todo1, todo2, todo3, todo4, todo5]);

$(document).ready(function(){
	var router = new TodoApp.AppRouter();
	Backbone.history.start();
});
