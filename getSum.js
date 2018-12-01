/*Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = -2, b = 3
Output: 1 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  return b === 0 ? a : getSum(a ^ b, (a & b) << 1 );
};

/**
 * 1 in bit 000001
 * 2 in bit 000010
 * 1 | 2 = 0000011
 *
 *
 *
 * 2 in bit 00000001
 * -2 in bit 10000001
 */

 console.log(getSum(1,2));
 console.log(getSum(-2,3));
