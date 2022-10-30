import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateTypes } from "./date.types";

const initialState: DateTypes = {
  value: 0,
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setDate } = dateSlice.actions;
export default dateSlice.reducer;
