class TodoComponent {
	constructor() {
		var todoContainer = $('.todo-container');
		var appendButton = $('.append-button');
		var newPopup = $('.new-popup');
		var editPopup = $('.edit-popup');
		var todoTemplate = $('#todo-template');
		var editID = null;
		this.eventHandler = todoContainer;

		//append
		appendButton.on('click', function() {
			newPopup.show();
		});

		//create new 
		newPopup.on('submit', function() {
			newPopup.hide();
			this.newTodo({
				name: newPopup.find('input').val(),
				id: Math.floor(Math.random() * 10000)
			});
		});

		//edit
		editPopup.on('submit', function() {
			editPopup.hide();
			this.editTodo({
				name: newPopup.find('input').val(),
				id: editID
			});
		});
	}

	newTodo(newObject) {
		todoTemplate.render(newObject)
			.appendTo(todoContainer)
			.data('todo-id', newObject.id)
			.on('click', function() {
				editID = $(this).data('todo-id')
				editPopup.show();
			});
		this.eventHandler.trigger('new-todo', newObject);
	}

	editTodo(newObject) {
		$('.todo').each(function() {
			if ($(this).data('todo-id') !== newObject.id)
				return;
			$(this).html(todoTemplate.render(newObject))
		});
		this.eventHandler.trigger('edit-todo', newObject);
	}

	//listener: new-todo, edit-todo 
	on() {
		this.eventHandler.on.apply(this.eventHandler, arguments);
	}

	off() {
		this.eventHandler.off.apply(this.eventHandler, arguments);
	}
};
