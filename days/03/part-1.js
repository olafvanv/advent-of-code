const lib = require('../../lib');

lib.getInput('3').then(input => {
  const batteries = input.split('\n');
  let answer = 0;
  
  for(const [index, battery] of batteries.entries()) {
    const numbers = battery.split('');
    let indexOfFirst = 0;

    const first = numbers.reduce((a, b, i) => {
      if(i === numbers.length - 1 || a > b || a === b) {
        return a;
      }

      indexOfFirst = i;
      return b;
    });

    const second = numbers.slice(indexOfFirst + 1).reduce((a,b) => {
      return a > b ? a : b;
    })

    const combination = Number((first + second));

    answer += combination;

    // if(index === 5) break;
  }
  console.log(answer);
})