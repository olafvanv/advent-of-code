const lib = require('../../lib');

lib.getInput('4').then(input => {
  const grid = input.split('\n').map(row => {
    return row.split('');
  });

  let answer = 0;

  for(const [rowIndex, row] of grid.entries()) {
    for(const [colIndex, col] of row.entries()) {

      if(grid[rowIndex][colIndex] === ".") continue;

      const adjacents = getAdjacentCells(grid, rowIndex, colIndex);

      if(adjacents.filter(f => f === '@').length < 4) {
        answer++;
      }
    }
  }

  console.log("answer:", answer);
});

function getAdjacentCells(grid, rowIndex, colIndex) {
  const adjacents = [];
  const neighbourCoordinates = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  for(const [x, y] of neighbourCoordinates) {
    const row = rowIndex + x;
    const col = colIndex + y;

    if(row >= 0 && row < grid.length && col >= 0 && col <= grid[0].length) {
      adjacents.push(grid[row][col]);
    }
  }

  return adjacents;
}
