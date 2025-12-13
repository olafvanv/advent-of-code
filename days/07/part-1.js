const lib = require('../../lib');

lib.getInput('7').then(input => {
  const grid = input.split('\n').map(r => r.split(''));

  let answer = 0;

  for(const [rowIndex, row] of grid.entries()) {
    if(rowIndex === 0 || rowIndex === grid.length) continue;

    const rowAbove = grid[rowIndex - 1];

    for(const [colIndex, col] of row.entries()) {
      if(rowAbove[colIndex] === 'S') {
        grid[rowIndex][colIndex] = '|'
        continue;
      }

      if(col === '^' && rowAbove[colIndex] === '|') {
        grid[rowIndex][colIndex - 1] = '|';
        grid[rowIndex][colIndex + 1] = '|';
        answer++;
      }

      if (rowAbove[colIndex] === '|' && col !== '^') {
        grid[rowIndex][colIndex] = '|';
      }
    }
  }

  console.log('answer:', answer)
})

