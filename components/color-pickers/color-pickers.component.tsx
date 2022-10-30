import { FC } from "react";
import { MuiColorInput } from "mui-color-input";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  setHoursColor,
  setMinutesColor,
  setSecondsColor,
} from "../../redux/colors/colors.slice";
import { colorsValueSelector } from "../helpers";

const ColorPickers: FC = () => {
  const dispatch = useAppDispatch();
  const colors = useAppSelector(colorsValueSelector);

  const onHoursColorChange = (color: string) => {
    dispatch(setHoursColor(color));
  };

  const onMinutesColorChange = (color: string) => {
    dispatch(setMinutesColor(color));
  };

  const onSecondsColorChange = (color: string) => {
    dispatch(setSecondsColor(color));
  };

  return (
    <div className="color-pickers">
      <div className="color-pickers-item">
        <p>Hour hand color:</p>
        <MuiColorInput
          value={colors.hoursColor}
          onChange={onHoursColorChange}
        />
      </div>
      <div className="color-picker-item">
        <p>Minute hand color:</p>
        <MuiColorInput
          value={colors.minutesColor}
          onChange={onMinutesColorChange}
        />
      </div>
      <div className="color-picker-item">
        <p>Seconds hand color:</p>
        <MuiColorInput
          value={colors.secondsColor}
          onChange={onSecondsColorChange}
        />
      </div>
    </div>
  );
};

export default ColorPickers;
