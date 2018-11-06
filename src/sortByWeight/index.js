/* eslint-disable-next-line */
function sumNumbers (number){
  return String(number)
    .split('')
    .reduce((sum, item) => sum + +item, 0);
}
export const sortByWeight = arr => {
  return arr.sort((a,b) => sumNumbers(a) - sumNumbers(b));
};
