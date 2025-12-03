const fs = require('fs');

function getInput(day) {
  return new Promise((resolve, reject) => {
    day = (day.length < 2 ? '0' : '') + day;
    let path = './inputs/' + day + '.txt';
    fs.readFile(path, 'utf-8', (err, data) => {
      if(err) {
        return reject(err);
      }

      resolve(data.replace(/\r\n/g, '\n').replace(/\n$/, ''));
    });
  })
}

module.exports = getInput;