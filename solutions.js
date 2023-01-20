function countPositivesSumNegatives(input) {
  let outCero = input.filter((num) => num != 0);
  //console.log(outCero);

  let positives = outCero.filter((num) => num >= 1).length;

  let negatives = outCero.filter((num) => num <= -1);
  let sumNegatives = negatives.reduce((a, b) => a + b, 0);
  console.log([positives, sumNegatives]);
}
