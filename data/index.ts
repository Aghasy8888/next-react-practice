import { CORRECT, VOID } from '@/constants';

export const bettingSystem: BettingSystem = {
  combinationsCount: 2,
  oddsCount: 3,
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
    value: 4.00,
  },
];