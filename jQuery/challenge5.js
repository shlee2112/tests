$( "img" ).mouseenter(function() {
	console.log("in");
	$('#image').css("background-image","url('"+this.src+"')");
	$('#image').html(this.alt);
});

$( "img" ).mouseleave(function() {
	console.log("out");
	$('#image').css("background-image","");
	$('#image').html("Hover over an image below.");
});

$( "img" ).focus(function() {
	console.log("focus");
	$('#image').css("background-image","url('"+this.src+"')");
	$('#image').html(this.alt);
});

$( "img" ).blur(function() {
	console.log("blur");
	$('#image').css("background-image","");
	$('#image').html("Hover over an image below.");
});

