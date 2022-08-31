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

export default decompressArrayDate;