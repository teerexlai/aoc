import * as fs from 'fs';

const X = 3;
const Y = 1;

export default (): void => {
  console.log(`Problem 3 - Part 1 ====================`);

  const levels = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8').split('\n');

  let trees = 0;
  let x_distance = 0;

  for (let i = 0; i < levels.length; i +=Y, x_distance += X) {
    if (x_distance >= levels[i].length) {
      x_distance = x_distance % levels[i].length;
    }
    if (levels[i][x_distance] === '#') {
      trees++;
    }
  }

  console.log(`Solution: ${trees}`);
};
