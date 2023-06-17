const myIncludes = (array, testValue) => {
  let condition = false;
  let index = 0;
  while (condition == false && index < array.length) {
    switch (testValue == array[index]) {
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
console.log(myIncludes(testArray, 8));
