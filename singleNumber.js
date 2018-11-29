/*Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ans = nums[0];
  for (let i = 1; i < nums.length; i++) {
    ans ^= nums[i];
  }
  return ans
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));

/**
 * NOTE:
 * XOR bit manipulation
 * a ^ a = 0
 * a ^ 0 = a
 * a ^ b ^ a = (a ^ a) ^ b = 0 ^ b = b
 */