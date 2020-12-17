import * as fs from 'fs';

let levels: string[] = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8').split('\n');

const sled = (x: number, y: number): number => {
  let trees = 0;
  let x_distance = 0;

  for (let i = 0; i < levels.length; i = i + y, x_distance += x) {
    if (x_distance >= levels[i].length) {
      x_distance = x_distance % levels[i].length;
    }
    if (levels[i][x_distance] === '#') {
      trees++;
    }
  }

  return trees;
};

export default (): void => {
  console.log(`Problem 3 - Part 2 ====================`);
  console.log(`Solution: ${sled(1, 1) * sled(3, 1) * sled(5, 1) * sled(7, 1) * sled(1, 2)}`);
};
