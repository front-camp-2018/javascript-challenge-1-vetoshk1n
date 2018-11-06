/* eslint-disable-next-line */
export const doubleNum = num => {
  const part1 = String(num).split('');
  const part2 = part1.splice(0, part1.length / 2);
  if (part1.join('') === part2.join('')){
    return num;
  }
  return num * 2;
};
