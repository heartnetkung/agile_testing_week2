var showErrorMessage = function() {
	//blah blah
};
var showSuccessMessage = function() {
	//blah blah
};

$(document).ready(function() {
	var todoContainer = $('.todo-container');
	var appendButton = $('.append-button');
	var newPopup = $('.new-popup');
	var editPopup = $('.edit-popup');
	var todoTemplate = $('#todo-template');
	var editID = null;

	//append
	appendButton.on('click', function() {
		newPopup.show();
	});

	//create new 
	newPopup.on('submit', function() {
		newPopup.hide();
		var newTodo = {
			name: newPopup.find('input').val(),
			id: Math.floor(Math.random() * 10000)
		};
		todoTemplate.render(newTodo)
			.appendTo(todoContainer)
			.data('todo-id', newTodo.id)
			.on('click', function() {
				editID = $(this).data('todo-id')
				editPopup.show();
			});
		$.ajax({
				method: "PUT",
				url: "some.php",
				data: newTodo
			})
			.done(function(msg) {
				//do nothing
			}).fail(function(jqXHR) {
				showErrorMessage(jqXHR.responseJSON.error);
			});
	});

	//edit
	editPopup.on('submit', function() {
		editPopup.hide();
		var newTodo = {
			name: newPopup.find('input').val(),
			id: editID
		}
		$('.todo').each(function() {
			if ($(this).data('todo-id') !== newObject.id)
				return;
			$(this).html(todoTemplate.render(newObject))
		});
		$.ajax({
				method: "POST",
				url: "some.php",
				data: newTodo
			})
			.done(function(msg) {
				showSuccessMessage('Edit completed');
			}).fail(function(jqXHR) {
				showErrorMessage(jqXHR.responseJSON.error);
			});
	});
});
