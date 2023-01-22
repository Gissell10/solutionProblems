function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    console.log([]);
  } else {
    let outCero = input.filter((num) => num != 0);
    let countPositives = outCero.reduce((a, c) => (c >= 0 ? a + 1 : a), 0);
    let negatives = outCero.filter((num) => num <= -1);
    let sumNegatives = negatives.reduce((a, b) => a + b, 0);
    console.log([countPositives, sumNegatives]);
  }
}
countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
