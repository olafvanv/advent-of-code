const lib = require('../../lib');

lib.getInput('1').then((input) => {
  const moves = input.split('\n');

  let dial = 50;
  let total = 0;

  for (let i = 0; i < moves.length; i++) {
    const direction = moves[i][0];
    const minusOrPlus = direction === 'R' ? 1 : -1;
    const amountOfSteps = moves[i].substring(1) * minusOrPlus;
    let startedAtZero = dial === 0;
    let counted = false
    
    dial += amountOfSteps;

    while(dial >= 100) {
      dial -= 100;
      total++;
      counted = true;
    }

    while(dial < 0) {
      dial += 100;
      if(startedAtZero) {
        startedAtZero = false;
        continue;
      }
      total++
    }

    if(dial === 0 && !counted) {
      total++;
    }
  }

  console.log(total);
});

function mod(a, n) {
  return ((a % n) + n) % n;
}