declare module 'index';

// compress
const decompressArrayDate = (array: number[], range: number) => {
  const result = [];

  for (let index = 0; index < array.length; index += 1) {
    const firstElement = array[index - 1];
    const twoElement = array[index];
    const lastResultElement = result[result.length - 1];

    if (index === 0) result.push([array[0]]);

    else if (firstElement + range < twoElement) {
      lastResultElement.push(firstElement);
      result.push([twoElement]);
    } else if (index === array.length - 1) {
      lastResultElement.push(twoElement);
    }
  }

  return result;
};

const compress = (numberArray: number[], procent: number) => {
  const result = [];

  const array = [...new Set(numberArray)].sort((a: number, b: number) => a - b);
  const range = array.length / Math.trunc((array.length / 100) * procent);

  result.push(...decompressArrayDate(array, range));

  result.forEach(item => item[0] === item[1] ? item.length = 1 : item);

  for (let index = 0; index < result.length; index += 1) {
    const [oneElement, twoElement] = result[index];

    if (result[index][1]) {
      result[index] = `${oneElement}-${twoElement}`;
    }
  }

  return result.join(', ');
};

// decompress
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

const decompress = (numberArray: string, procent: number) => {
  const result = [];

  const rangeArray = numberArray.split(/\s?,\s?/).map(item => [...item.split('-')]);

  for (let index = 0; index < rangeArray.length; index += 1) {
    const [start, end] = rangeArray[index];

    if (end) {
      const keysArray = [...Array(+end + 1).keys()];

      result.push(...keysArray.slice(+start));
    } else {
      result.push(+start);
    }
  }

  return compressArrayData(result, procent);
};

// global

const compressNumberArray = (numberArray: string | number[], procent: number) => {
  if (procent >= 0) {
    if (typeof numberArray === 'object') {
      return compress(numberArray, procent);
    }

    if (typeof numberArray === 'string') {
      return decompress(numberArray, procent);
    }
  }

  return [];
};

module.exports = compressNumberArray;