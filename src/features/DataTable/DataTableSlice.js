import { createSlice } from '@reduxjs/toolkit';

const tableSlice = createSlice({
  name: 'dataTable',
  initialState: {
    data: [
      ['Andy', 'Radam', 30],
      ['Jona', 'Radam', 25],
      // Additional rows...
    ],
  },
  reducers: {
    addRow: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addRow } = tableSlice.actions;
export default tableSlice.reducer;