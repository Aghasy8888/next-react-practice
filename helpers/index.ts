import { CORRECT, INCORRECT } from '@/constants';

type StackEntry = {
  start: number;
  combo: Odds[];
};

export function getCombinations(arr: Odds[], length: number) {
  const result: Odds[][] = [];
  const stack: StackEntry[] = [];

  stack.push({ start: 0, combo: [] });

  while (stack.length) {
    const { start, combo } = stack.pop() as StackEntry;

    if (combo.length === length) {
      result.push([...combo]);
      continue;
    }

    for (let i = start; i < arr.length; i++) {
      stack.push({ start: i + 1, combo: [...combo, arr[i]] });
    }
  }

  return result;
}

export function getOddsOfCombination(odds: Odds[]): number {
  return odds.reduce((accumulator, currentValue) => {
    if (currentValue.status === INCORRECT) return 0;

    return (
      accumulator * (currentValue.status === CORRECT ? currentValue.value : 1)
    );
  }, 1);
}

export const fetchPosts = async (page: number, limit: number) => {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?page=${page}&limit=${limit}`
  );

  return posts.json();
};