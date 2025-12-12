const lib = require('../../lib');

lib.getInput('6').then(input => {
  const lines = input.split('\n').map(m => m.split(' ').filter(f => f !== ''));
  const rotated = Array.from({length: lines[0].length}, (_, colIndex) => lines.map(row => row[colIndex]));

  let answer = 0;

  for(const sumRow of rotated) {
    const operator = sumRow[sumRow.length - 1];
    const numbers = sumRow.slice(0, sumRow.length - 1).map(m => +m);

    const total = numbers.reduce((acc, curr) => {
      if(operator === '*') {
        return acc * curr;
      }

      return acc + curr;
    });
    answer += total;
  }

  console.log('answer', answer)
})