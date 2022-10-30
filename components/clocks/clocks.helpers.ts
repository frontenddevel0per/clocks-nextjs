export const getSecondsDegrees = (date: number) => {
  return (
    ((new Date(date).getSeconds() * 1000 + new Date(date).getMilliseconds()) /
      60000) *
    360
  ).toFixed(3);
};

export const getMinutesDegrees = (date: number) => {
  return (
    ((new Date(date).getMinutes() * 60 + new Date(date).getSeconds()) / 3600) *
    360
  ).toFixed(3);
};

export const getHoursDegrees = (date: number) => {
  if (new Date(date).getHours() >= 12) {
    return (
      (((new Date(date).getHours() - 12) * 60 + new Date(date).getMinutes()) /
        720) *
      360
    ).toFixed(3);
  } else {
    return (
      ((new Date(date).getHours() * 60 + new Date(date).getMinutes()) / 720) *
      360
    ).toFixed(3);
  }
};
