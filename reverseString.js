/*Write a function that takes a string as input and returns the string reversed.

Example 1:

Input: "hello"
Output: "olleh"
Example 2:

Input: "A man, a plan, a canal: Panama"
Output: "amanaP :lanac a ,nalp a ,nam A" */

/**
 * @param {string} s
 * @return {string}
 */
const reverseString = (s) => {
  s = s.split('');
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
  return s.join('');
};

console.log(reverseString('hello'));
console.log(reverseString('A man, a plan, a canal: Panama'));