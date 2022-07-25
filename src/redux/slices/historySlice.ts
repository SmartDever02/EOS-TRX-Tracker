import { createSlice, isPending } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getRandomPrice } from '../../utils/helper';

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

interface CellType {
  act: any;
  date: string;
  time: string;
  sender: string;
  receiver: string;
  quantity: number;
  price: number;
  amount: number;
}

export const historySlice = createSlice({
  name: 'trxHistory',
  initialState,
  reducers: {
    setEmpty: (state) => {
      state.data = [];
    },
    setResultData: (state, action: PayloadAction<Array<any>>) => {
      state.isPending = false;
      if (action.payload.length !== 0) {
        var payload: Array<CellType> = [];
        action.payload.forEach((elem) => {
          const price = getRandomPrice(
            new Date(elem.timestamp).toLocaleDateString()
          );
          var data: CellType = {
            act: elem.act,
            date: new Date(elem.timestamp).toLocaleDateString(),
            time: new Date(elem.timestamp).toLocaleTimeString(),
            sender: elem.act.data.from,
            receiver: elem.act.data.to,
            quantity: elem.act.data.amount,
            price: price,
            amount: price * elem.act.data.amount,
          };
          payload.push(data);
        });

        state.data = [...state.data, payload];
      }
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
