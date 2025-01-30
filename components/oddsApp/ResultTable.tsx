import { INCORRECT, VOID } from '@/constants';
import { getOddsOfCombination } from '@/helpers';

type ResultTableProps = {
  combinations: Odds[][];
  stakePerCombination: number;
};

const ResultTable = ({
  combinations,
  stakePerCombination,
}: ResultTableProps) => {
  return combinations.map((combo, index) => {
    const oddsOfCombination = getOddsOfCombination(combo);
    const winningOfCombination = oddsOfCombination * stakePerCombination;

    return (
      <p key={index} className="text-white font-bold">
        <span>{index + 1}:</span>
        {combo.map((odds, i) => (
          <span
            key={i}
            className={`${odds.status === INCORRECT ? 'text-red-600' : ''} ${
              odds.status === VOID ? 'text-yellow-300' : ''
            }`}
          >
            {' '}
            |{odds.value.toFixed(2)}|
          </span>
        ))}
        <span> /{oddsOfCombination}/</span>
        <span> *{winningOfCombination.toFixed(2)}*</span>
      </p>
    );
  });
};

export default ResultTable;
