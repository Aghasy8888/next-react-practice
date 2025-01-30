import { useEffect } from 'react';
import { getOddsOfCombination } from '@/helpers';

const useCalculateWinnings = (
  combinations: Odds[][],
  stakePerCombination: number,
  setWinnings: TSetNumber
) => {
  useEffect(() => {
    const calculatedWinnings = combinations.reduce((total, combo) => {
      const oddsOfCombination = getOddsOfCombination(combo);
      const winningOfCombination = oddsOfCombination * stakePerCombination;
      return total + winningOfCombination;
    }, 0);

    setWinnings(calculatedWinnings);
  }, [combinations, stakePerCombination]);
};

export default useCalculateWinnings;
