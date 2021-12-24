export const median = (values: number[]): number => {
  values.sort((a, b) => a - b);

  const half = Math.floor(values.length / 2);

  if (values.length % 2) return values[half];

  return (values[half - 1] + values[half]) / 2;
};

export const createRange = (size: number, startAt: number = 0, options?: { descending: boolean }): ReadonlyArray<number> => {
  let range = [...Array(size).keys()].map(i => i + startAt);
  if (options?.descending) range = range.reverse();
  return range;
}