import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type AuthState = {
  anyData: {},
};

const initialState = {
    anyData: {},
} as AuthState;

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    getData: (state, action: PayloadAction<{}>) => {
      state.anyData = action.payload;
    },
  },
});

export const { getData, logOut } = generalSlice.actions;

export const selectAnyData = (state: RootState) =>
  state.generalReducer.anyData;

export default generalSlice.reducer;
