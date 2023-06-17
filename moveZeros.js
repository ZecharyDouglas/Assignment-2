const moveZeros = (nums) => {
  if (nums.length > 1) {
    let slow = 0;
    let fast = 1;
    while (fast < nums.length) {
      if (nums[slow] === 0 && nums[fast] !== 0) {
        let temp = nums[fast];
        nums[fast] = nums[slow];
        nums[slow] = temp;
        slow++;
      }
      if (nums[slow] !== 0) {
        slow++;
      }
      fast++;
    }
  }
  return nums;
};

const testArray = [3, 3, 0, 4, 0, 9, 11];
const result = moveZeros(testArray);
console.log(result);
