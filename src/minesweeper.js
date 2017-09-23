class Game {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    }

    playMove(rowIndex, columnIndex) {
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
}

class Board {
    constructor(numberOfRows, numberOfColumns, numberOfBombs) {
        this._numbersOfBombs = numberOfBombs;
        this._numberOfTiles = (numberOfColumns * numberOfRows);
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    get playerBoard() {
        return this._playerBoard
    }

    // Flipping the tile
    flipTile(rowIndex, columnIndex) {
        if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
            console.log('This tile has already been flipped!');
            return;
        } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
            this._playerBoard[rowIndex][columnIndex] = 'B';
            console.log(`There is a BOMB at ${rowIndex} ${columnIndex}!`);
        } else {
            this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
        }
        this._numberOfTiles--;
    };


    // Checking how many bombs around the clicked tile
    getNumberOfNeighborBombs(rowIndex, columnIndex) {
        let neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
        const numberOfRows = this._bombBoard.length;
        const numberOfColumns = this._bombBoard[0].length;
        // console.log(`numberOfRows = ${numberOfRows} numberOfColumns = ${numberOfColumns}`);
        let numberOfBombsFound = 0;
        neighborOffsets.forEach(offset => {
            const neighborRowIndex = offset[0] + rowIndex;
            const neighborColumnIndex = offset[1] + columnIndex;
            // console.log(`Checking [${neighborRowIndex}, ${neighborColumnIndex}]\n`);
            // Checking borders of the board, tile shouldn't offset outside of the board
            if (neighborRowIndex >= 0 &&
                neighborRowIndex < numberOfRows &&
                neighborColumnIndex >= 0 &&
                neighborColumnIndex < numberOfColumns) {
                // Checking if there is a bomb?
                if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
                    numberOfBombsFound++;
                }
            }
        });
        console.log(`Bombs found ${numberOfBombsFound}`);
        return numberOfBombsFound;
    };

    hasSafeTiles() {
        return this._numberOfTiles !== this._numbersOfBombs
    };

    printBoard() {
        this._playerBoard.map(cell => (cell === null) ? ' ' : cell);
        console.log(
            this._playerBoard.map(row => row.join('|')).join('\n')
        );
    };

    // Player's board Generator. Array with height and width params.
    static generatePlayerBoard(numberOfRows, numberOfColumns) {
        let board = [];
        for (let i = 0; i < numberOfRows; i++) {
            let row = [];
            for (let j = 0; j < numberOfColumns; j++) {
                row.push(' ');
            }
            board.push(row);
        }
        return board;
    };

    // Bombs board generator. Array with height and width params.
    static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
        let board = [];
        for (let i = 0; i < numberOfRows; i++) {
            let row = [];
            for (let j = 0; j < numberOfColumns; j++) {
                row.push(null);
            }
            board.push(row);
        }

        // placing bombs
        let numberOfBombsPlaced = 0;
        while (numberOfBombsPlaced < numberOfBombs) {
            let randomRowIndex = Math.floor(Math.random() * numberOfRows);
            let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
            if (board[randomRowIndex][randomColumnIndex] !== 'B') {
                board[randomRowIndex][randomColumnIndex] = 'B';
                numberOfBombsPlaced++;
            }
        }
        return board;
    };
}

const g = new Game(5, 5, 6);
g.playMove(2, 2);