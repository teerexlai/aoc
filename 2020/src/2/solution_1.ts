import * as fs from 'fs';

export default (): void => {
  console.log(`Problem 2 - Part 1 ====================`);

  const passwords = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8').split('\n');

  let validPasswords = 0;
  
  for (const record of passwords) {
    const count = record.split(/\s/)[0].replace('-',',');
    const letter = record.split(/\s/)[1].slice(0,1);

    const policy = new RegExp(`^${letter}{${count}}$`);
    const password: string = record.slice(record.indexOf(':') + 2);
    const strippedPassword = password.replace(new RegExp(`[^${letter}]`, 'g'), '');

    if (policy.test(strippedPassword)) {
      validPasswords++;
    }
  }

  console.log(`Solution: ${validPasswords}`);
};
