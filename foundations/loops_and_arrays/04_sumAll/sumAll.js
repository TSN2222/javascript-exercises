const sumAll = function (start, end) {
  if (
    !Number.isInteger(start) ||
    !Number.isInteger(end) ||
    start < 0 ||
    end < 0
  ) {
    return 'ERROR';
  }
  if (start > end) {
    [start, end] = [end, start];
  }

  let sum = 0;
  while (start <= end) {
    sum += start;
    start++;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
