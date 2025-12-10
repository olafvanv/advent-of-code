const lib = require('../../lib');

lib.getInput('5').then((input) => {
  input = input.split('\n');
  const splitIndex = input.findIndex(f => f === '');
  const ranges = input.slice(0, splitIndex).map(range => ({from: +range.split('-')[0], to: +range.split('-')[1]}));
  let unique = [];

  for(const range of ranges) {
    const newRanges = [];

    for(const existing of unique) {
      if(range.from <= existing.to && range.to >= existing.from) {
        range.from = Math.min(range.from, existing.from);
        range.to = Math.max(range.to, existing.to);
      } else {
        newRanges.push(existing);
      }
    }

    newRanges.push(range);
    unique = newRanges;
  }

  let answer = 0;
  unique.forEach(f => {
    answer += f.to - f.from + 1;
  });

  console.log('answer:', answer);
})
