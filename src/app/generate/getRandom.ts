export function getRandomByPercentages(array: number[]): number {
  const probabilities = array.flatMap((n, index) => Array(n).fill(index));

  const randomValue =
    probabilities[Math.floor(Math.random() * probabilities.length)];
  return randomValue;
}
