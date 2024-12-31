function getArrayParams(...arr) {
  
  if (arr.length === 0) return { min: 0, max: 0, avg: 0 };

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((acc, value) => acc + value, 0);
  const avg = Number((sum / arr.length).toFixed(2));

  return { min, max, avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((acc, value) => acc + value, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let value of arr) {
    if (value % 2 === 0) {
      sumEvenElement += value;
    } else {
      sumOddElement += value;
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let value of arr) {
    if (value % 2 === 0) {
      sumEvenElement += value;
      countEvenElement++;
    }
  }

  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let arr of arrOfArr) {
    const result = func(...arr);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
