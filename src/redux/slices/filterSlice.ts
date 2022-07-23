import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface EditBoxState {
  account: string;
  startDate: string;
  endDate: string;
  unit: string;
}

const initialState: EditBoxState = {
  account: '',
  startDate: '',
  endDate: '',
  unit: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<string>) => {
      state.account = action.payload;
    },
    setStartDate: (state, action: PayloadAction<string>) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<string>) => {
      state.endDate = action.payload;
    },
    setUnit: (state, action: PayloadAction<string>) => {
      state.unit = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAccount, setStartDate, setEndDate, setUnit } =
  filterSlice.actions;

export default filterSlice.reducer;
