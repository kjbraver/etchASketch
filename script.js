$(document).ready(function() {
	//generate 16 row divs for gameBoard
	for(var i = 0; i < 16; i++) {
		$('#gameBoard').append($('<div class="row"></div>'));
	}

	//generate 16 column divs in each row to fill out gameBoard
	for(var j = 0; j < 16; j++) {
		$('.row').append($('<div class="cell default"></div>'));
	}
});
