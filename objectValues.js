const grabValues = (userObject) => {
  let values = [];

  for (const key in userObject) {
    if (Object.hasOwnProperty.call(userObject, key)) {
      values.push(userObject[key]);
    }
  }
  return values;
};
const testObj = {
  name: "x",
  height: "xxx",
  weight: "xzx",
  color: "xxvxz",
  structure: "xxcxz",
  parent: "ccsdczcx",
};

console.log(grabValues(testObj));
