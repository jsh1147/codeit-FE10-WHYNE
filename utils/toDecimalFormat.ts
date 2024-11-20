export const toDecimalFormat = (num: number): string => {
  return Number.isInteger(num) ? `${num}.0` : num.toString();
};
