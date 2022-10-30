import { useEffect, useState } from "react";
import { MuiColorInput } from "mui-color-input";

export default function Home() {
  const [date, setDate] = useState(Date.now());
  const [hoursColor, setHoursColor] = useState("red");
  const [minutesColor, setMinutesColor] = useState("green");
  const [secondsColor, setSecondsColor] = useState("orange");

  useEffect(() => {
    setInterval(() => setDate(Date.now()), 70);
  }, []);

  const getSecondsDegrees = (date: number) => {
    return (
      ((new Date(date).getSeconds() * 1000 + new Date(date).getMilliseconds()) /
        60000) *
      360
    );
  };

  const getMinutesDegrees = (date: number) => {
    return Math.round(
      ((new Date(date).getMinutes() * 60 + new Date(date).getSeconds()) /
        3600) *
        360
    );
  };

  const getHoursDegrees = (date: number) => {
    if (new Date(date).getHours() >= 12) {
      return Math.round(
        (((new Date(date).getHours() - 12) * 60 + new Date(date).getMinutes()) /
          720) *
          360
      );
    } else {
      return Math.round(
        ((new Date(date).getHours() * 60 + new Date(date).getMinutes()) / 720) *
          360
      );
    }
  };

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
    <div className="wrapper">
      <div className="clocks">
        <div
          className="seconds-hand-wrapper"
          style={{
            transform: `rotate(${getSecondsDegrees(date)}deg)`,
          }}
        >
          <div
            className="seconds-hand"
            style={{ background: secondsColor }}
          ></div>
        </div>
        <div
          className="minutes-hand-wrapper"
          style={{
            transform: `rotate(${getMinutesDegrees(date)}deg)`,
          }}
        >
          <div
            className="minutes-hand"
            style={{ background: minutesColor }}
          ></div>
        </div>
        <div
          className="hours-hand-wrapper"
          style={{
            transform: `rotate(${getHoursDegrees(date)}deg)`,
          }}
        >
          <div className="hours-hand" style={{ background: hoursColor }}></div>
        </div>
      </div>
      <div className="color-pickers">
        <div className="color-pickers-item">
          <p>Hour hand color:</p>
          <MuiColorInput value={hoursColor} onChange={onHoursColorChange} />
          {/* <input type="color" onChange={(e) => setHoursColor(e.target.value)} /> */}
        </div>
        <div className="color-picker-item">
          <p>Minute hand color:</p>
          <MuiColorInput value={minutesColor} onChange={onMinutesColorChange} />
          {/* <input
            type="color"
            onChange={(e) => setMinutesColor(e.target.value)}
          /> */}
        </div>
        <div className="color-picker-item">
          <p>Seconds hand color:</p>
          <MuiColorInput value={secondsColor} onChange={onSecondsColorChange} />
          {/* <input
            type="color"
            onChange={(e) => setSecondsColor(e.target.value)}
          /> */}
        </div>
      </div>
    </div>
  );
}
