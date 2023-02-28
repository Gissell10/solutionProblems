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

// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   }
//   let arr = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     console.log();a
//   }
// }
// //console.log(fibonacci(1));
// console.log(fibonacci(0));

function armstrong(n) {
  let string = n.toString();
  let pow = string.length;
  let arr = [...string];
  let arrNumber = arr.map((e) => parseInt(...e));
  let potencia = arrNumber.map((e) => Math.pow(e, pow)).reduce((a, b) => a + b);

  return n === potencia ? true : false;
}

console.log(armstrong(153));

// armstrong([(21, 4), Programming challenge description:
//   Alice has an even number of N beads, and each bead has a number from 1 to N painted on it. She would like to make a necklace out of all the beads, with a special requirement: any two beads next to each other on the necklace must sum to a prime number. Alice needs your help to calculate how many ways it is possible to do so.

//   Example: N = 4

//   There are two possible ways to build the necklace. Note that the last bead connects to the first bead.

//   1 2 3 4
//   1 4 3 2

//   So the answer is 2.
//   Input:
//   The inputs consists of one even integer on a line. Each integer N is 2 <= N <= 18.
//   Output:
//   Print a line containing the number of ways to make a necklace according to the above rules.
//   Test 1
//   Test Input
//   Download Test 1 Input
//   4
//   Expected Output
//   Download Test 1 Output
//   2(1, -6)]);
