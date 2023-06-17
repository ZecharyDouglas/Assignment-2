const grabKeys = (userObject) => {
  let keys = [];

  for (const key in userObject) {
    if (Object.hasOwnProperty.call(userObject, key)) {
      keys.push(key);
    }
  }
  return keys;
};
const testObj = {
  name: "x",
  height: "xxx",
  weight: "xzx",
  color: "xxvxz",
  structure: "xxcxz",
  parent: "ccsdczcx",
};

console.log(grabKeys(testObj));
