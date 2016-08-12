$(document).ready(function() {
	//generate 16 row divs for gameBoard
	for(var i = 0; i < 16; i++) {
		$('#gameBoard').append($('<div class="row"></div>'));
	}

	//generate 16 column divs in each row to fill out gameBoard
	for(var j = 0; j < 16; j++) {
		$('.row').append($('<div class="cell"></div>'));
	}

	leaveColorTrail('red');
});

//leaves color trail of color "newColor"
//newColor: string corresponding to css class name included in stylesheet
function leaveColorTrail(newColor) {
	//change color of cells when mouse passes through
	$('.cell').on("mouseenter", function(event) {
		event.stopPropagation();
		event.preventDefault();
		$(this).addClass(newColor);	
	});
}