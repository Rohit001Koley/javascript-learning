const arr = [1, 2, 2, 3, 3, 3, 4];

const result = arr.reduce((acc, curr) => {
  // count frequency
  acc.count[curr] = (acc.count[curr] || 0) + 1;

  // update max
  if (acc.count[curr] > acc.maxCount) {
    acc.maxCount = acc.count[curr];
    acc.maxElement = curr;
  }

  return acc;
}, { count: {}, maxCount: 0, maxElement: null });

console.log(result.maxElement); // 3