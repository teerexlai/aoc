import * as fs from 'fs';

const GOAL = 2020;

export default (): void => {
  console.log(`Problem 1 - Part 1 ====================`);

  const nums = fs.readFileSync(`${__dirname}/input.txt`, "utf-8").split("\n");
  const checked: Record<string,string> = {};
  
  for (const val of nums) {
    if (checked[val] != null) {
      console.log(`${checked[val]} + ${val} = ${GOAL}`);
      console.log(`Solution: ${+checked[val] * +val}`);
      return;
    }
    checked[(GOAL - +val).toString()] = val;
  }
  console.log('No solution found. Did you mess up?');
};
