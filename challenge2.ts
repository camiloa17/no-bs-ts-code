/**
 * Reproduce forEach, filter and Map using reduce and has to be typesafe
 */

//forEach
function forEach<Val>(array: Val[], callback: (val: Val) => void): void {
  array.reduce((prev, curr) => {
    callback(curr);
    return curr;
  });
}
forEach([1, 2, 3, 4], (val) => {
  console.log(val);
});
//Map

function map<Val, ReturnType>(
  array: Val[],
  callback: (val: Val) => ReturnType
): ReturnType[] {
  return array.reduce((prev, curr) => {
    return [...prev, callback(curr)];
  }, [] as ReturnType[]);
}

console.log(map([1, 2, 3, 4, 5], (val) => val * 2));
console.log(map(['Hello', 'world', 'my', 'life'], (val) => `${val} answer`));
console.log(map([1, 4, 5], (val) => (val * 5).toString()));

//Filter
function filter<Val>(array: Val[], callback: (val: Val) => boolean): Val[] {
  return array.reduce((prev, curr) => {
    if (callback(curr)) {
      return [...prev, curr];
    }
    return prev;
  }, [] as Val[]);
}

console.log(filter([1, 5, 1, 3, 9], (val) => val === 1));
