// function countPositivesSumNegatives(input) {
//   if (input === null || input.length === 0) {
//     console.log([]);
//   } else {
//     let outCero = input.filter((num) => num != 0);
//     let countPositives = outCero.reduce((a, c) => (c >= 0 ? a + 1 : a), 0);
//     let negatives = outCero.filter((num) => num <= -1);
//     let sumNegatives = negatives.reduce((a, b) => a + b, 0);
//     console.log([countPositives, sumNegatives]);
//   }
// }
// countPositivesSumNegatives([
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
// ]);
// function sumTwoSmallestNumbers(numbers) {
//   let organized = numbers.sort((a, b) => {
//     return a - b;
//   });
//   return organized;

//console.log(sumTwoSmallestNumbers([15, 28, 4.67, 2, 43]));

// *************** Algorithm *********** //

// function findElement(arr, func) {
// let num = 0;
// for (let i = 0; i <= arr.length; i++) {
//   num = arr[i];
//   if (func(num)) {
//     return num;
//   }
// }
// return undefined;
// }

// console.log(findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0));

// *************** Linear Search *********** //

/*([-5, 2, 10, 4 , 6], 10, =>'Shoul return 2' if is not found return -1)

function linearSearch(arr, t) {
  return arr.indexOf(t);
}

console.log(linearSearch([-5, 2, 10, 4, 6], 1));*/

/* function sorted(numbers, t) {
  return numbers.sort((a, b) => a - b).indexOf(t);
}
console.log(sorted([2, 9, 6, 0, 3, 1], 9));
console.log(sorted([-5, 4, 6, 2, 10], 10));
console.log(sorted([-5, 4, 6, 2, 10], 20));

//Note that the array is sorted in place, and no copy is made. */

// function sorted(numbers) {
//   return [...numbers].sort((a, b) => a - b);
// }
// console.log(sorted([2, 9, 6, 0, 3, 1]));
