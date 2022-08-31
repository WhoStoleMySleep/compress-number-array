function compressArrayData(array: number[], toLen: number) {
  const sizeRatio = array.length / Math.trunc((array.length / 100) * toLen);

  const results: number[] = [];
  let resIndex = 0;
  let lastRatio = sizeRatio;
  let lastValue = 0;

  for (var index = 0; index < array.length; index += 1) {
    let rest = 0;
    lastRatio -= 1;
    lastValue += array[index] + rest;

    if (lastRatio <= 0) {
      results[(resIndex += 1) - 1] = lastValue;
      lastValue = 0;
      lastRatio += sizeRatio;
    }
  }
  return results;
}

export default compressArrayData;