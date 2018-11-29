/*Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations. */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let fast = 0;
  let slow = 0;
  while (fast < nums.length) {
    const curr = nums[fast];
    if (curr !== 0) {
      nums[fast] = nums[slow];
      nums[slow] = curr;
      slow++;
    }
    fast++;
  }
  console.log(nums);
};


moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0]);
moveZeroes([1]);
moveZeroes([1,0]);
moveZeroes([1,0,1]);
moveZeroes([]);
moveZeroes([1,1]);