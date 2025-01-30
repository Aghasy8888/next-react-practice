type ResultsProps = {
  winnings: number;
  totalStake: number;
  stakePerCombination: number;
};

const Results = ({
  winnings,
  totalStake,
  stakePerCombination,
}: ResultsProps) => {
  return (
    <section className="mt-10 text-white">
      <p>Winnings: {winnings.toFixed(2)}</p>
      <p>Stake: {totalStake.toFixed(2)}</p>
      <p>Stake per combination: {stakePerCombination.toFixed(2)}</p>
    </section>
  );
};

export default Results;
