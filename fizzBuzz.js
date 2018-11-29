/*Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
] */
const fizzBuzzHelper = (n) => {
  if (n % 15 === 0) {
    return 'FizzBuzz';
  } else if (n % 3 === 0) {
    return 'Fizz';
  } else if (n % 5 === 0) {
    return 'Buzz';
  } else {
    return `${n}`;
  }
}
/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) =>  {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(fizzBuzzHelper(i));
  }
  return result;
};

/**
 * Approach 2 where instead of having explicitly stating the conditions, mapping the conditions in fizz buzz map
 * and then check each number against the map
 * @param {number} n
 */
const fizzBuzz2 = (n) => {
  const map = {
    3: 'Fizz',
    5: 'Buzz'
  }
  const result = [];
  for (let i = 1; i <= n; i++) {
    let str = '';
    for (let key in map) {
      if (i % parseInt(key) === 0) {
        str += map[key];
      }
    }
    if (str.length === 0) {
      str = `${i}`;
    }
    result.push(str);
  }
  return result;
}

console.log(fizzBuzz(15));
console.log(fizzBuzz2(15));