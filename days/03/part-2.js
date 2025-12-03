const lib = require('../../lib');

lib.getInput('3').then(input => {
  const batteries = input.split('\n');
  let answer = 0;
  
  for(const [index, battery] of batteries.entries()) {
    const numbers = battery.split('');
    let maxIndex = numbers.length - 11;
    let fromIndex = 0;
    let combination = '';
    // console.log(battery);

    while(maxIndex <= numbers.length) {
      const part = numbers.slice(fromIndex, maxIndex);
      let foundIndex = 0;
      // console.log(fromIndex, maxIndex);
      // console.log(part);
      const highestNumber = part.reduce((a, b, i) => {
        if(a > b || a === b) return a;

        foundIndex = i;
        return b;
      });
      
      // console.log(highestNumber);
      combination += highestNumber;
      fromIndex = fromIndex + foundIndex + 1;
      maxIndex++;
    }
  

    answer += Number(combination);
    // console.log(combination);

    // if(index === 0) break;
  }
  console.log(answer);
})