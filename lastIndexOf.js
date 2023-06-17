const myUnshift = (array, testValue) => {
  let condition = false;
  let index = array.length;
  while (condition == false && index >= 0) {
    switch (testValue == array[index]) {
      case true:
        condition = true;
        break;

      case false:
        break;
    }

    index--;
  }
  if (condition == false) return (index = -1);
  else {
    return index + 1;
  }
};

const testArray = [2, 6, 7, 7, 9, 7];
console.log(myUnshift(testArray, 7));
