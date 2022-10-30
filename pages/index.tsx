import { useState, useEffect } from "react";
import Clocks from "../components/clocks/clocks.component";
import ColorPickers from "../components/color-pickers/color-pickers.component";
import { getTime } from "../components/helpers";

export default function Home() {
  const [date, setDate] = useState(0);
  const [hoursColor, setHoursColor] = useState("red");
  const [minutesColor, setMinutesColor] = useState("green");
  const [secondsColor, setSecondsColor] = useState("orange");

  useEffect(() => {
    setInterval(() => setDate(Date.now()), 70);
  }, []);

  return (
    <div className="wrapper">
      <Clocks
        secondsColor={secondsColor}
        minutesColor={minutesColor}
        hoursColor={hoursColor}
        date={date}
      />
      <h2>
        It`s {getTime(date).hours}:{getTime(date).minutes}:
        {getTime(date).seconds}
      </h2>
      <ColorPickers
        hoursColor={hoursColor}
        setHoursColor={setHoursColor}
        minutesColor={minutesColor}
        setMinutesColor={setMinutesColor}
        secondsColor={secondsColor}
        setSecondsColor={setSecondsColor}
      />
    </div>
  );
}
