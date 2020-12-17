import * as fs from 'fs';

export default (): void => {
  console.log(`Problem 2 - Part 1 ====================`);

  const passwords = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8').split('\n');

  let validPasswords = 0;
  
  for (const record of passwords) {
    const pos1 = +record.split(/\s/)[0].split('-')[0] - 1;
    const pos2 = +record.split(/\s/)[0].split('-')[1] - 1;
    const letter = record.split(/\s/)[1].slice(0,1);

    const policy = new RegExp(`(^.{${pos1}}${letter}{1}.{${pos2-pos1 - 1}}[^${letter}]{1})|(^.{${pos1}}[^${letter}]{1}.{${pos2-pos1 - 1}}${letter}{1})`);
    const password: string = record.slice(record.indexOf(':') + 2);

    if (policy.test(password)) {
      validPasswords++;
    }
  }

  console.log(`Solution: ${validPasswords}`);
};
