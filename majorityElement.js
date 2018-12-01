/*Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement1 = function (nums) {
  // time: O(nlog(n)); space: O(1)
  return nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)]
};

var majorityElement2 = function (nums) {
  // time: O(n); space: O(n/2)
  const counter = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (counter[num] > nums.length / 2) {
      return num;
    } else if (counter[num]) {
      counter[num]++;
    } else {
      counter[num] = 1;
    }
  }
  for (let key in counter) {
    if (counter[key] > nums.length / 2) {
      return parseInt(key);
    }
  }
}

var majorityElement3 = function (nums) {
  let curr;
  let vote = -1;
  for (let i = 0; i < nums.length; i++) {
    if (vote < 0) {
      curr = nums[i];
    }
    if (curr === nums[i]) {
      vote++;
    } else {
      vote--;
    }
  }
  return curr;
}

console.log(majorityElement3([3, 2, 3]));
console.log(majorityElement3([2, 2, 1, 1, 1, 2, 2]));