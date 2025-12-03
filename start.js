const readline = require('readline');
const path = require('path');
const fs = require('fs');
const childProcess = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let day;
let part;

rl.question('What day? ', (answer) => {
  day = (answer.length === 2) ? answer : '0' + answer;

  rl.question('What part? (1 or 2) ', (answer) => {
    part = 'part-' + answer;

    const scriptPath = path.join(`${__dirname}/days`, day, `${part}.js`);

    if(!fs.existsSync(scriptPath)) {
      console.error(`${scriptPath} doesnt exist.`);
      process.exit(1);
    }

    console.log(`Running script for day ${day}, ${part}`)
    childProcess.fork(scriptPath);

    rl.close();
  })
})