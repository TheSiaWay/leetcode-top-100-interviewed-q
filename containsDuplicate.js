/*Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  /**
   * Approach 1:
   *  sort list
   *  time: O(nlog(n))/ space: O(1)
   */

  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length -1; i++) {
    if (nums[i] === nums[i+1]) {
      return true;
    }
  }
  return false;
};
var containsDuplicate2 = function (nums) {
  /**
   * Approach 2:
   *  store inside hash or set
   *  time: O(n)/ space: O(n)
   */

  const map = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    }
    map.add(nums[i]);
  }
  return false;
};