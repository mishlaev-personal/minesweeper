"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game(numberOfRows, numberOfColumns, numberOfBombs) {
        _classCallCheck(this, Game);

        this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    }

    _createClass(Game, [{
        key: "playMove",
        value: function playMove(rowIndex, columnIndex) {
            this._board.flipTile(rowIndex, columnIndex);
            if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
                console.log("Game is over");
                this._board.printBoard();
            } else if (this._board.hasSafeTiles()) {
                console.log("You win!");
            } else {
                console.log("Current board:");
                printBoard();
            }
        }
    }]);

    return Game;
}();

var Board = function () {
    function Board(numberOfRows, numberOfColumns, numberOfBombs) {
        _classCallCheck(this, Board);

        this._numbersOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfColumns * numberOfRows;
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    _createClass(Board, [{
        key: "flipTile",


        // Flipping the tile
        value: function flipTile(rowIndex, columnIndex) {
            if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
                console.log('This tile has already been flipped!');
                return;
            } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
                this._playerBoard[rowIndex][columnIndex] = 'B';
                console.log("There is a BOMB at " + rowIndex + " " + columnIndex + "!");
            } else {
                this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
            }
            this._numberOfTiles--;
        }
    }, {
        key: "getNumberOfNeighborBombs",


        // Checking how many bombs around the clicked tile
        value: function getNumberOfNeighborBombs(rowIndex, columnIndex) {
            var _this = this;

            var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
            var numberOfRows = this._bombBoard.length;
            var numberOfColumns = this._bombBoard[0].length;
            // console.log(`numberOfRows = ${numberOfRows} numberOfColumns = ${numberOfColumns}`);
            var numberOfBombsFound = 0;
            neighborOffsets.forEach(function (offset) {
                var neighborRowIndex = offset[0] + rowIndex;
                var neighborColumnIndex = offset[1] + columnIndex;
                // console.log(`Checking [${neighborRowIndex}, ${neighborColumnIndex}]\n`);
                // Checking borders of the board, tile shouldn't offset outside of the board
                if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
                    // Checking if there is a bomb?
                    if (_this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
                        numberOfBombsFound++;
                    }
                }
            });
            console.log("Bombs found " + numberOfBombsFound);
            return numberOfBombsFound;
        }
    }, {
        key: "hasSafeTiles",
        value: function hasSafeTiles() {
            return this._numberOfTiles !== this._numbersOfBombs;
        }
    }, {
        key: "printBoard",
        value: function printBoard() {
            this._playerBoard.map(function (cell) {
                return cell === null ? ' ' : cell;
            });
            console.log(this._playerBoard.map(function (row) {
                return row.join('|');
            }).join('\n'));
        }
    }, {
        key: "playerBoard",
        get: function get() {
            return this._playerBoard;
        }
    }], [{
        key: "generatePlayerBoard",


        // Player's board Generator. Array with height and width params.
        value: function generatePlayerBoard(numberOfRows, numberOfColumns) {
            var board = [];
            for (var i = 0; i < numberOfRows; i++) {
                var row = [];
                for (var j = 0; j < numberOfColumns; j++) {
                    row.push(' ');
                }
                board.push(row);
            }
            return board;
        }
    }, {
        key: "generateBombBoard",


        // Bombs board generator. Array with height and width params.
        value: function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
            var board = [];
            for (var i = 0; i < numberOfRows; i++) {
                var row = [];
                for (var j = 0; j < numberOfColumns; j++) {
                    row.push(null);
                }
                board.push(row);
            }

            // placing bombs
            var numberOfBombsPlaced = 0;
            while (numberOfBombsPlaced < numberOfBombs) {
                var randomRowIndex = Math.floor(Math.random() * numberOfRows);
                var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
                if (board[randomRowIndex][randomColumnIndex] !== 'B') {
                    board[randomRowIndex][randomColumnIndex] = 'B';
                    numberOfBombsPlaced++;
                }
            }
            return board;
        }
    }]);

    return Board;
}();

var g = new Game(5, 5, 6);
g.playMove(2, 2);