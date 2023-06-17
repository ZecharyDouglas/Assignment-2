const myEvery = (array, callback) => {
  let condition = true;
  let index = 0;
  while (condition == true && index < array.length) {
    switch (callback(array[index])) {
      case true:
        break;

      case false:
        condition = false;
        break;
    }
    index++;
  }

  return condition;
};

const testArray = [2, 6, 7, 8, 9, 10];
console.log(myEvery(testArray, (element) => element > 0));
