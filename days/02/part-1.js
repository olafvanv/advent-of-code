const lib = require('../../lib');

lib.getInput('2').then(input => {
  const allIdRanges = input.split(',').map((ids) => {
    const fromAndTo = ids.split('-');

    return {
      from: fromAndTo[0],
      to: fromAndTo[1]
    }
  });

  let answer = 0;

  for(const range of allIdRanges) {
    // Create array of all ids and filter out all numbers with uneven characters. Those are always valid
    const ids = createArray(range.from, range.to)
      .filter(f => f.toString().length %2 === 0)
      .filter(f => {
      const number = f.toString();
      const index = number.length / 2;
      const parts = [number.slice(0, index), number.slice(index)];

      return parts[0] === parts[1];
    });

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

// id.length % 2 === 1 => altijd goed
// id.length % 2 === 0 => delen door twee => is [0] en [1] hetzelfde => invalid