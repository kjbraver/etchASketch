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
		var gameBoardLength = 600.0;
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
		$('.cell').removeClass(currentColor);
		//determine new color setting
		currentColor = $(this).data("color");
		//bind new color class to cells
	});

	//change cell color as mouse passes through
	var randomColors = ["red", "blue", "yellow", "green", "purple", "pink", "orange", "neonGreen"];
	$("#gameBoard").on("mouseenter", ".cell", function() {
			if(currentColor === "random") {
				var randomColor = Math.floor(Math.random() * 8);
				$(this).addClass(randomColors[randomColor]);
			} else {
				$(this).addClass(currentColor);
			}	
		});

	//erase board when clear button is clicked
	$('#menuContents').on('click', '#clear', function() {
		$('.cell').attr('class', 'cell defaultColor');
	});
});

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
			$row.append($('<div class="cell defaultColor"></div>'));
		}
	}
}