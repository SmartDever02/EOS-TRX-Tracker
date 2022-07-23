import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface EditBoxState {
  data: Array<any>;
  isPending: boolean;
}

const initialState: EditBoxState = {
  data: [],
  isPending: false,
};

export const historySlice = createSlice({
  name: 'trxHistory',
  initialState,
  reducers: {
    setResultData: (state, action: PayloadAction<Array<any>>) => {
      state.data = [...action.payload];
    },
    setPendingStatus: (state, action: PayloadAction<boolean>) => {
      state.isPending = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setResultData, setPendingStatus } = historySlice.actions;

export default historySlice.reducer;
