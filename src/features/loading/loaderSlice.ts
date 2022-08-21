import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
  isLoading: boolean;
}

const loaderSlice = createSlice({
  name: 'loading',
  initialState: {} as State,
  reducers: {
    setLoading(state, action: PayloadAction<any>) {
      state.isLoading = action.payload;
    },
  },
});
export const { setLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
