/**
 * Функция сжатия и расжатия массива чисел
 * @param {string | object} numberArray - Преобразует массив в сжатую строку или строку в массив
 * @param {number} procent - Процент сжатия (задаётся в виде числа)
 * @returns {string | object} - Возвращает массив или строку
*/

const compressNumberArray = (numberArray: string | number[], procent: number) => {
  const result = [];

  if (typeof numberArray === 'object') {
    const array = [...new Set(numberArray)].sort((a: number, b: number) => a - b);
    const range = array.length / Math.trunc((array.length / 100) * procent);

    for (let index = 0; index < array.length; index += 1) {
      if (index === 0) result.push([array[0]]);

      else if (+array[index - 1] + range < array[index]) {
        result[result.length - 1].push(array[index - 1]);
        result.push([array[index]]);
      } else if (index === array.length - 1) {
        result[result.length - 1].push(array[index]);
      }
    }

    result.forEach(item => item[0] === item[1] ? item.length = 1 : item);

    for (let index = 0; index < result.length; index += 1) {
      if (result[index][1]) {
        result[index] = `${result[index][0]}-${result[index][1]}`;
      }
    }

    return result.join(', ');
  }
  if (typeof numberArray === 'string') {
    const rangeArray = numberArray.split(/\s?,\s?/).map(item => [...item.split('-')]);

    for (let index = 0; index < rangeArray.length; index += 1) {
      const start = rangeArray[index][0];
      const end = rangeArray[index][1];

      if (rangeArray[index].length > 1) {
        const keysArray = [...Array(+end + 1).keys()];

        result.push(...keysArray.slice(+start));
      } else {
        result.push(+start);
      }
    }

    function compressArrayData(array: number[], toLen: number) {
      const sizeRatio = array.length / Math.trunc((array.length / 100) * toLen);

      const results = [];
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

    return compressArrayData(result, procent);
  }

  return [];
};

module.exports = compressNumberArray;