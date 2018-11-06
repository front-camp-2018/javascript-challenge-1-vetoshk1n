/* eslint-disable-next-line */
function countNumbers (number){
  return String(number)
    .split('')
    .reduce((sum, item) => sum + +item, 0);
}
export const sortByWeight = arr => {
  return arr.sort((a,b) => countNumbers(a) - countNumbers(b));
};
