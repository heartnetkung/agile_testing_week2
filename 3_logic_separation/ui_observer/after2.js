var showErrorMessage = function() {
	//blah blah
};
var showSuccessMessage = function() {
	//blah blah
};

$(document).ready(function() {
	var todoComponent = new TodoComponent();
	todoComponent.on('new-todo', function(event, newObject) {
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
	todoComponent.on('edit-todo', function(event, newObject) {
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
	//code reuse
	todoComponent.newTodo({
		id: 123,
		name: 'do exercise!'
	})
});
