const myReduce = (array, callback, initialValue) => {
  let accumulator = initialValue;
  for (let index = 0; index < array.length; index++) {
    accumulator = callback(accumulator, array[index]);
  }
  return accumulator;
};

const testArray = [3, 1, 10, 5];
let initialValue = 0;
const sumOfValues = myReduce(
  testArray,
  (acc, element) => acc + element,
  initialValue
);
console.log(sumOfValues);
