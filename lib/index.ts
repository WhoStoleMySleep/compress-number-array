import compress from './modules/compress';
import decompress from './modules/decompress';

const compressNumberArray = (numberArray: string | number[], procent: number) => {
  if (procent) {
    if (typeof numberArray === 'object') {
      return compress;
    } else if (typeof numberArray === 'string') {
      return decompress;
    }
  }

  return [];
};

module.exports = compressNumberArray;