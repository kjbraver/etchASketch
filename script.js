$(document).ready(function() {
	//current color setting 
	var currentColor = "red";

	//generate initial game board
	generateBoard(16);

	//resize game board when button is clicked
	$('#menuContents').on('click', '#resize', function() {
		var boardSize;

		do {
		var userInput = prompt("How big would you like the new board to be?", "Ex: Enter 2 for a 2x2 board.")
		boardSize = parseInt(userInput);
		} while(isNaN(boardSize));

		//calculate new length and width of cells
		var cellBorder = 2.0 * parseFloat($('.cell').css('border-width'));
		var gameBoardLength = 600;
		var cellLength = gameBoardLength/boardSize;

		generateBoard(boardSize);

		//update cell class css with new length and width
		$('.cell').width(cellLength - cellBorder);
		$('.cell').height(cellLength - cellBorder);
		$('.row').height(cellLength);
	}); 

	//manage color change when one of the color trail buttons are clicked
	$('#menuContents').on('click', '.colorTrail', function() {
		//remove prior color trail
		eraseBoard();
		//determine new color setting
		currentColor = $(this).data("color");
	});

	//change cell color as mouse passes through
	$("#gameBoard").on("mouseenter", ".cell", function() {
		switch(currentColor) {
			case "random":
				var randomR = Math.floor(Math.random() * 256);
				var randomG = Math.floor(Math.random() * 256);
				var randomB = Math.floor(Math.random() * 256);
				var randomColor = 'rgb(' + randomR + ', ' + randomG + ', ' + randomB + ')';
				$(this).css("background-color", randomColor);
				break;
			case "gradient":
				var opacity = parseFloat($(this).css('opacity'));
				opacity -= 0.2;
				$(this).css('background-color', '#2F4F4F');
				$(this).css('opacity', opacity);
				break;
			case "red":
				$(this).css('background-color', '#D55858');
				break;
			case "blue":
				$(this).css('background-color', '#2FAA96');
				break;
		}	
	});

	//erase board when clear button is clicked
	$('#menuContents').on('click', '#clear', function() {
		eraseBoard();
	});
});

function eraseBoard() {
	$('.cell').css({'background-color': '#2F4F4F', 'opacity': '1'});
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

function darken() {

}