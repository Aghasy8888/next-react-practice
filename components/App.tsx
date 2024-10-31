'use client';

import { allOdds, bettingSystem } from '@/data';
import { generateCombinations } from '@/helpers' 
import { useState } from 'react';

const App = () => {
  const [totalStake, setTotalStake] = useState(100.0);
  const combinations = generateCombinations(
    allOdds,
    bettingSystem.combinationsCount
  );
  const combinationComponents = combinations.map((combo, index) => (
    <p key={index}>
      <span>{index}</span>
      {combo.map((odds, i) => (
        <span key={i}>|{odds}|</span>
      ))}
    </p>
  ));

  return combinationComponents;
};

export default App;
