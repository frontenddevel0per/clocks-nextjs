import { FC, useEffect, useState } from "react";
import {
  getSecondsDegrees,
  getMinutesDegrees,
  getHoursDegrees,
} from "./clocks.helpers";
import { ClockProps } from "./clocks.types";

const Clocks: FC<ClockProps> = ({
  secondsColor,
  minutesColor,
  hoursColor,
  date,
}) => {
  return (
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
  );
};

export default Clocks;
