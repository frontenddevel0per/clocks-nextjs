import { FC, useEffect, useState } from "react";
import { dateValueSelector, colorsValueSelector } from "../helpers";
import { useAppSelector } from "../../redux/hooks";
import {
  getSecondsDegrees,
  getMinutesDegrees,
  getHoursDegrees,
} from "./clocks.helpers";

const Clocks: FC = ({}) => {
  const date = useAppSelector(dateValueSelector);
  const colors = useAppSelector(colorsValueSelector);
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
          style={{ background: colors.secondsColor }}
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
          style={{ background: colors.minutesColor }}
        ></div>
      </div>
      <div
        className="hours-hand-wrapper"
        style={{
          transform: `rotate(${getHoursDegrees(date)}deg)`,
        }}
      >
        <div
          className="hours-hand"
          style={{ background: colors.hoursColor }}
        ></div>
      </div>
    </div>
  );
};

export default Clocks;
