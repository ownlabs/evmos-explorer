export const range = (length: number) =>
  Array(length)
    .fill(undefined)
    .map((_, i) => i + 1);
