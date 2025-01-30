'use client';

import { useState } from 'react';
import { allOdds, bettingSystem as defaultSystem } from '@/data';
import { getCombinations } from '@/helpers';
import useCalculateWinnings from '@/hooks/useCalculateWinnings';
import { Results, ResultTable } from '@/components/oddsApp';

const App = () => {
  const [totalStake, setTotalStake] = useState(100.0);
  const [bettingSystem, setBettingSystem] = useState(defaultSystem);

  const stakePerCombination = totalStake / bettingSystem.oddsCount;
  const [winnings, setWinnings] = useState(0);
  const combinations = getCombinations(
    allOdds,
    bettingSystem.combinationsLength
  );

  useCalculateWinnings(combinations, stakePerCombination, setWinnings);

  return (
    <>
      <ResultTable
        combinations={combinations}
        stakePerCombination={stakePerCombination}
      />
      <Results
        stakePerCombination={stakePerCombination}
        totalStake={totalStake}
        winnings={winnings}
      />
    </>
  );
};

export default App;
