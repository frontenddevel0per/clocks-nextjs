import { useState, useEffect } from "react";
import Clocks from "../components/clocks/clocks.component";
import ColorPickers from "../components/color-pickers/color-pickers.component";
import { getTime, dateValueSelector } from "../components/helpers";
import { setDate } from "../redux/date/date.slice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";

export default function Home() {
  const dispatch = useAppDispatch();
  const date = useAppSelector(dateValueSelector);

  useEffect(() => {
    setInterval(() => dispatch(setDate(Date.now())), 70);
    return clearInterval(0);
  }, []);

  return (
    <div className="wrapper">
      <Clocks />
      <h2>
        It`s {getTime(date).hours}:{getTime(date).minutes}:
        {getTime(date).seconds}
      </h2>
      <ColorPickers />
    </div>
  );
}
