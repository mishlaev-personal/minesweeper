// Player's board Generation с параметрами по высоте и ширине
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++) {
    let row = [];
    for (let j=0; j < numberOfColumns; j++) {
      row.push(' ');
    };
    board.push(row);
  };
  return board;
};

console.log(generatePlayerBoard(2, 3));

//
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++) {
    let row = [];
    for (let j=0; j < numberOfColumns; j++) {
      row.push(null);
    };
    board.push(row);
  };

  // placing bombs
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random()*numberOfRows);
    let randomColoumnIndex = Math.floor(Math.random()*numberOfColumns);
    if (board[randomRowIndex][randomColoumnIndex] !== 'B') {
      board[randomRowIndex][randomColoumnIndex] = 'B';
      numberOfBombsPlaced++;
    };
    // while loop has the potential to place bombs on top of already existing bombs
  };

  return board;
};

// Checking how many bombs around the clicked tile
const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  let neighborOffsets = [[-1,-1], [-1,0], [-1,1], [0,1], [1,1], [1,0], [1,-1], [0,-1]];
  const numberOfRows = bombBoard.length
  const numberOfColumns = bombBoard[0].length;
  // console.log(`numberOfRows = ${numberOfRows} numberOfColumns = ${numberOfColumns}`);
  let numberOfBombs = 0;
  neighborOffsets.forEach(offset => {
    const neighborRowIndex = offset[0] + rowIndex;
    const neighborColumnIndex = offset[1] + columnIndex;
    // console.log(`Checking [${neighborRowIndex}, ${neighborColumnIndex}]\n`);
    // Checking borders of the board, tile shoeldn't offset outside of the board
    if (neighborRowIndex >= 0 &&
        neighborRowIndex < numberOfRows &&
        neighborColumnIndex >= 0 &&
        neighborColumnIndex < numberOfColumns) {
          // Checking if there is a bomb?
          if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B'){
            numberOfBombs++;
          };
    };
  });
  console.log(`Bombs found ${numberOfBombs}`);
  return numberOfBombs;
};

// Flipping the tile
const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    console.log('This tile has already been flipped!');
    return;
  } else if (bombBoard[rowIndex][columnIndex] === 'B') {
    playerBoard[rowIndex][columnIndex] = 'B';
    console.log(`There is a BOMB at ${rowIndex} ${columnIndex}!`);
  } else {
    const bombsAround = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex)
    playerBoard[rowIndex][columnIndex] = bombsAround;
  };
};

const printBoard = (board) => {
  board.map(cell => (cell === null) ? cell = ' ' : cell);
  console.log(
    board.map(row => row.join('|')).join('\n')
  );
};


// Programm Start
let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Boom Board: ');
printBoard(bombBoard);
flipTile(playerBoard, bombBoard, 1, 1);
console.log('Updated Player Board:');
printBoard(playerBoard);
