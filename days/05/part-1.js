const lib = require('../../lib');

lib.getInput('5').then((input) => {
  input = input.split('\n');
  const splitIndex = input.findIndex(f => f === '');
  const ranges = input.slice(0, splitIndex).map(range => ({from: range.split('-')[0], to: range.split('-')[1]}));
  const ids = input.slice(splitIndex + 1);
  let answer = 0;

  for(const id of ids) {
    for(const range of ranges) {
      if(isBetween(id, range.from, range.to)) {
        spoiled = 0;
        break;
      }
    }
  }

  console.log('answer:', answer);

})

function isBetween(num, from, to) {
  num = Number(num);
  from = Number(from);
  to = Number(to);
  return num >= from && num <= to;
}