TodoApp.TaskView = Backbone.View.extend({
	tagName: 'div',
	events: {
		'click button.remove': 'removeTask',
		'click button.edit': 'editTask',
		'click button.save': 'saveTask'
	},
	initialize: function(){
		this.taskTemplate = _.template($('#tpl-task').html());
	},
	render: function(){
		this.$el.html(this.taskTemplate(this.model.toJSON()));
		return this;
	},
	removeTask: function (){
		this.model.destroy();
	},
	editTask: function(){
		this.$('h3').each(function(){
			$(this).replaceWith($('<input class="' + $(this).attr('class') + '" value="' + $(this).text() + '" />'));
		});
		this.$('button.edit').text('Save').addClass('save').removeClass('edit');
	},
	saveTask: function(){
		this.model.set({
			task: this.$('input.task').val()
		})
	}


});