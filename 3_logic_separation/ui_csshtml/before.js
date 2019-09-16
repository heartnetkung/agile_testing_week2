$(document).ready(function() {

	//css in logic
	$('button').on('click', function() {
		$('body').css({
			color: 'blue';
			width: '200 px';
			'font-size': '14 px';
		});
		//do things
	});

	//html in logic
	$('button').on('click', function() {
		$('body').append(
				'<div class="container" style="width:100%"><div class="inner">Hello</div><div class="inner">Goodbye</div><h2>Greetings</h2></div>'
			)
			//do things
	});

	//js UI in logic
	var count = 0;
	$('button').on('click', function() {
		var $newdiv1 = $("<div id='object1'></div>"),
			newdiv2 = document.createElement("div"),
			existingdiv1 = document.getElementById("foo");
		$(newdiv2).html(++count);
		$("body").append($newdiv1, [newdiv2, existingdiv1]);
		//do things
	});
});
