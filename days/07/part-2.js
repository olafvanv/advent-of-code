const lib = require('../../lib');

lib.getInput('7').then(input => {
  const grid = input.split('\n').map(r => r.split(''));

  const startIndex = grid.shift().indexOf('S');

  let beams = [
    [{ index: +startIndex, total: 1 }]
  ];

  for (let rowIndex = 1; rowIndex < grid.length; rowIndex++) {
    const newBeams = [];
    const prevBeams = beams[rowIndex - 1];
    const row = grid[rowIndex];

    for (const beam of prevBeams) {
      if (row[beam.index] === '.') {
        grid[rowIndex - 1][beam.index] = '|';

        const existing = newBeams.find(f => f.index === beam.index);
        if(existing) {
          existing.total += beam.total;
        } else {
          newBeams.push({ index: beam.index, total: beam.total });
        }
      } else if (row[beam.index] === '^') {
        grid[rowIndex - 1][beam.index - 1] = '|';
        grid[rowIndex - 1][beam.index + 1] = '|';

        const getTotal = (index) => {
          const existing = newBeams.find(f => f.index === index);
          const total = beam.total;

          if (existing) {
            existing.total += total;
          } else {
            newBeams.push({ index: index, total: total });
          }
        }

        getTotal(beam.index - 1);
        getTotal(beam.index + 1);
      }
    }

    beams.push(newBeams);
  }

  const total = beams[beams.length - 1].reduce((acc, curr) => acc += curr.total, 0);

  console.log('answer', total);
})

