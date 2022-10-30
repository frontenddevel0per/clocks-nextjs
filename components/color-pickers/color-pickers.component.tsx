import { FC } from "react";
import { MuiColorInput } from "mui-color-input";
import { ColorPickersProps } from "./color-pickers.types";

const ColorPickers: FC<ColorPickersProps> = ({
  hoursColor,
  minutesColor,
  secondsColor,
  setHoursColor,
  setMinutesColor,
  setSecondsColor,
}) => {
  const onHoursColorChange = (color: string) => {
    setHoursColor(color);
  };

  const onMinutesColorChange = (color: string) => {
    setMinutesColor(color);
  };

  const onSecondsColorChange = (color: string) => {
    setSecondsColor(color);
  };
  return (
    <div className="color-pickers">
      <div className="color-pickers-item">
        <p>Hour hand color:</p>
        <MuiColorInput value={hoursColor} onChange={onHoursColorChange} />
      </div>
      <div className="color-picker-item">
        <p>Minute hand color:</p>
        <MuiColorInput value={minutesColor} onChange={onMinutesColorChange} />
      </div>
      <div className="color-picker-item">
        <p>Seconds hand color:</p>
        <MuiColorInput value={secondsColor} onChange={onSecondsColorChange} />
      </div>
    </div>
  );
};

export default ColorPickers;
