const myEach = (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    callback(array[index]);
  }
};

const array = [3, 4, 5];
myEach(array, (element) => {
  element++;
  console.log(element);
});
