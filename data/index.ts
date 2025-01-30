import { CORRECT, INCORRECT, VOID } from '@/constants';

export const bettingSystem: BettingSystem = {
  combinationsLength: 5,
  oddsCount: 6,
};

export const allOdds: Odds[] = [
  //plural and singular of odds are the same
  {
    status: CORRECT,
    value: 2.00,
  },
  {
    status: CORRECT,
    value: 3.00,
  },
  {
    status: VOID,
    value: 5.00,
  },
  {
    status: CORRECT,
    value: 8.00,
  },
  {
    status: CORRECT,
    value: 3.00,
  },
  {
    status: INCORRECT,
    value: 4.00,
  },
];