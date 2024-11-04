function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = min + max;
  sum = arr.reduce(function (currentSum, currentNumber) {
    return currentSum + currentNumber
  }, 0);
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = arr.reduce(function (currentSum, currentNumber) {
    return currentSum + currentNumber
  }, 0);
  return sum
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return Number(max - min);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]
    } else {
      sumOddElement += arr[i]
    }
  }
  return sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    func(...arrOfArr[i])
    if (func(...arrOfArr[i]) > maxWorkerResult) {
      maxWorkerResult = func(...arrOfArr[i]);
    }
  }
  return maxWorkerResult
}
