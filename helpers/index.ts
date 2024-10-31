type StackEntry = {
  start: number;
  combo: number[];
};

function getCombinations(arr: number[], length: number) {
    const result: number[][] = [];
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

export function generateCombinations(allOdds: Odds[], combinationsCount: number) {
  const oddsValues = allOdds.map((odds) => odds.value);  

  return getCombinations(oddsValues, combinationsCount);
}