const myMap = (array, callback) => {
  const resultArray = [];
  for (let index = 0; index < array.length; index++) {
    resultArray.push(callback(array[index]));
  }
  return resultArray;
};

const testArray = [{ name: "Adam" }, { name: "James" }, { name: "Michael" }];

let lastName = "Smith";
const result = myMap(testArray, (element) => {
  return element.name + " " + lastName;
});

console.log(result);
