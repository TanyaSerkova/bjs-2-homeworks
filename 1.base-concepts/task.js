"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = b**2 - 4 * a * c;

  if (D === 0) {
    arr.push(-b / (2 * a));
    return arr;
  } else if (D > 0) {
    arr.push((-b + Math.sqrt(D) ) / (2 * a))
    &&
    arr.push((-b - Math.sqrt(D) )/(2*a))
    return arr
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100 / 12;
  let creditBody = amount - contribution;
  let payment = creditBody * (percent + (percent / (((1 + percent)**countMonths) - 1)));
  let totalMortgage = (contribution + creditBody + (creditBody - payment * countMonths)).toFixed(2);
  return Number(totalMortgage);
}