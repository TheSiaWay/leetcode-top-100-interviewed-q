/*Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case? */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  /**
   * time: O(nlog(n))
   * space: O(1)
   */
  if (s.length !== t.length) {
    return false;
  }

  s = s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt());
  t = t.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt());

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      return false;
    }
  }

  return true;

};

function isAnagram2(s, t) {
  /**
   * Approach 2:
   * 1. use hashmap to keep track of items in one of the string
   * 2. check against that map (subtract letters from map if exists)
   * 3. check if the whole map letter count is 0
   * time: O(n)
   * space: O(n)
   */
  if (s.length !== t.length) {
    return false;
  }
  const map = {};
  for (let i = 0; i < t.length; i++) {
    const curr = t[i];
    if (map[curr]) {
      map[curr]++;
    } else {
      map[curr] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if(map[curr]) {
      map[curr]--;
    } else {
      return false;
    }
  }
  for (let key in map) {
    if (map[key] !== 0) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('ratt', 'rrat'));