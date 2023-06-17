const myPush = (array, inuptValue) => {
  array[array.length] = inuptValue;

  return array.length;
};

const testArray = [4, 5, 6];
const updatedArray = myPush(testArray, 9);

console.log(updatedArray);
console.log(testArray);
