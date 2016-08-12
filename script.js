$(document).ready(function() {

	generateBoard(16);

	//resize game board when button is clicked
	$('#resize').on('click', function(event) {
		event.stopPropagation();
		event.preventDefault();
		var boardSize;

		do {
		var userInput = prompt("How big would you like the new board to be?", "Ex: Enter 2 for a 2x2 board.")
		boardSize = parseInt(userInput);
		} while(isNaN(boardSize));

		//calculate new length and width of cells
		var cellBorder = 2.0 * parseFloat($('.cell').css('border-width'));
		var gameBoardLength = 600.0;
		var cellLength = gameBoardLength/boardSize;

		generateBoard(boardSize);

		//update cell class css with new length and width
		$('.cell').width(cellLength - cellBorder);
		$('.cell').height(cellLength - cellBorder);
		$('.row').height(cellLength);

	}); 

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

//generates game board with boardSize x boardSize dimensions
//boardSize: int
function generateBoard(boardSize) {
	if(boardSize >= 1) {
		//empty current gameBoard
		$('#gameBoard').empty();

		//generate 'boardSize' row divs for gameBoard
		var $gameBoard = $('#gameBoard');
		for(var i = 0; i < boardSize; i++) {
			$gameBoard.append($('<div class="row"></div>'));
		}

		//generate 'boardSize' column divs in each row to fill out gameBoard
		var $row = $('.row');
		for(var j = 0; j < boardSize; j++) {
			$row.append($('<div class="cell"></div>'));
		}
	}
}