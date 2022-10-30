import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColorsTypes } from "./colors.types";

const initialState: ColorsTypes = {
  value: {
    hoursColor: "red",
    minutesColor: "green",
    secondsColor: "orange",
  },
};

export const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    setHoursColor: (state, action: PayloadAction<string>) => {
      state.value.hoursColor = action.payload;
    },
    setMinutesColor: (state, action: PayloadAction<string>) => {
      state.value.minutesColor = action.payload;
    },
    setSecondsColor: (state, action: PayloadAction<string>) => {
      state.value.secondsColor = action.payload;
    },
  },
});

export const { setHoursColor, setMinutesColor, setSecondsColor } =
  colorsSlice.actions;
export default colorsSlice.reducer;
