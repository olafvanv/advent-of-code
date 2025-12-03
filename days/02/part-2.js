const lib = require('../../lib');
const fs = require('fs');

lib.getInput('2').then(input => {
  const allIdRanges = input.split(',').map((ids) => {
    const fromAndTo = ids.split('-');

    return {
      from: fromAndTo[0],
      to: fromAndTo[1]
    }
  });

  let answer = 0;
  let invalid = []

  for(const range of allIdRanges) {
    const regex = /^(\d+)\1+$/;

    const ids = createArray(range.from, range.to).filter(f => regex.test(f.toString()));

    if(!ids.length) continue;

    const totalInvalid = ids.reduce((total, number) => total + number);

    answer += totalInvalid;
  }

  console.log(answer);
})


function createArray(from, to) {
  from = Number(from);
  to = Number(to);

  const total = to - from + 1;
  return Array.from({length: total}, (_, i) => Number(i) + from);
}
