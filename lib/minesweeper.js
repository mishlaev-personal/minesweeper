'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];
  for (var i = 0; i < numberOfRows; i++) {
    var row = [];
    for (var j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    };
    board.push(row);
  };
  return board;
};

console.log(generatePlayerBoard(2, 3));

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  var board = [];
  for (var i = 0; i < numberOfRows; i++) {
    var row = [];
    for (var j = 0; j < numberOfColumns; j++) {
      row.push(null);
    };
    board.push(row);
  };

  var numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    var randomColoumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColoumnIndex] = 'B';
    numberOfBombsPlaced++;
    // while loop has the potential to place bombs on top of already existing bombs
  };

  return board;
};

var printBoard = function printBoard(board) {
  console.log(board.map(function (row) {
    return row.join('|');
  }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);