const mySome = (array, callback) => {
  let condition = false;
  let index = 0;
  while (condition == false && index < array.length) {
    switch (callback(array[index])) {
      case true:
        condition = true;
        break;

      case false:
        break;
    }
    index++;
  }

  return condition;
};

const testArray = [2, 6, 7, 8, 9, 10];
console.log(mySome(testArray, (element) => element == 90));
