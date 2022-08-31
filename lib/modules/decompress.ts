import compressArrayData from '../helpers/compressArrayData';

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

export default decompress;