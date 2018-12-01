/*Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...
Example 1:

Input: "A"
Output: 1
Example 2:

Input: "AB"
Output: 28
Example 3:

Input: "ZY"
Output: 701 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    const charCode = s[i].charCodeAt() - 64; // a = 1;

    ans = charCode + (26 * ans);
  }
  return ans;
};
console.log(titleToNumber('A'));
console.log(titleToNumber('B'));
console.log(titleToNumber('AB'));
console.log(titleToNumber('ZY'));