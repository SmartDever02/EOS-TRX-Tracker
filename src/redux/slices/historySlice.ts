import { createSlice, isPending } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface EditBoxState {
  data: Array<Array<any>>;
  skip: number;
  isPending: boolean;
}

const initialState: EditBoxState = {
  data: [],
  skip: 0,
  isPending: false,
};

export const historySlice = createSlice({
  name: 'trxHistory',
  initialState,
  reducers: {
    setEmpty: (state) => {
      state.data = [];
    },
    setResultData: (state, action: PayloadAction<Array<any>>) => {
      state.isPending = false;
      if (action.payload.length !== 0)
        state.data = [...state.data, action.payload];
    },
    setPendingStatus: (state, action: PayloadAction<boolean>) => {
      state.isPending = action.payload;
    },
    addSkip: (state) => {
      state.skip = state.skip + 10;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setResultData, setPendingStatus, addSkip, setEmpty } =
  historySlice.actions;

export default historySlice.reducer;
