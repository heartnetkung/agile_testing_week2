$(document).ready(function() {

	//css in logic => use class
	$('button').on('click', function() {
		$('body').addClass('highlighted');
		//do things
	});

	//html in logic => pre added html
	$('button').on('click', function() {
		$('.container').show();
		//do things
	});

	//js UI in logic => use template library
	var count = 0;
	$('button').on('click', function() {
		$("#template1").render({ count: ++count });
		//do things
	});
});
