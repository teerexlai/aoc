import * as fs from 'fs';

const GOAL = 2020;
const MAX_SET_COUNT = 3;

const backtrack = (nums: number[], currentSet: number[]): boolean => {
  const setSum = currentSet.reduce((ret, val) => ret + val, 0);

  if (currentSet.length < MAX_SET_COUNT) {
    for (const num of nums) {
        currentSet.push(num);
        if (backtrack(nums.slice(nums.indexOf(num), nums.length), currentSet))
          return true;
        currentSet.pop();
    }
  }
  else if (setSum === GOAL) {
    console.log(`Set Found: ${currentSet}`);
    console.log(`Solution: ${currentSet.reduce((ret, val) => ret * val, 1)}`);
    return true;
  }
  return false;
};

export default (): void => {
  console.log(`Problem 1 - Part 2 ====================`);
  const nums = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8').split('\n').map(num => +num).sort();

  if(!backtrack(nums, []))
    console.log('No solution found. Did you mess up?');
};
