const myFilter = (array, callback) => {
  const resultArray = [];
  for (let index = 0; index < array.length; index++) {
    switch (callback(array[index])) {
      case true:
        resultArray.push(array[index]);
        break;
      case false:
        break;
    }
  }
  return resultArray;
};

const testArray = [2, 6, 7, 8, 9, 10];

let result = myFilter(testArray, (element) => {
  return element < 9;
});

console.log(result);
