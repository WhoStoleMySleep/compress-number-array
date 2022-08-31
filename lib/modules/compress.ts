import decompressArrayDate from '../helpers/decompressArrayDate';

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

export default compress;