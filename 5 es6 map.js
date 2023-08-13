function doubleNumbers(numbers) {
  const doubledArray = numbers.map((number) => number * 2);
  return doubledArray;
}

const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers));

/*5) javascript es6 map

Write a JavaScript function named doubleNumbers that takes an array of numbers as an argument and uses the ES6 map method to return a new array where each number is doubled.

Example:
const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers)); // Output: [2, 4, 6, 8, 10]
*/
