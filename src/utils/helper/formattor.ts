export const convertNumToArr = (num: number, adder?: number): number[] => {
  const tempArr: number[] = [];
  for (let i = 0; i < num; i++) {
    tempArr.push(i + (adder || 0));
  }
  return tempArr;
};

export const capitalizeFirstLetter = (str: string): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};
