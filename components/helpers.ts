export const getTime = (date: number) => {
  const seconds =
    new Date(date).getSeconds() > 9
      ? new Date(date).getSeconds()
      : `0${new Date(date).getSeconds()}`;
  const minutes =
    new Date(date).getMinutes() > 9
      ? new Date(date).getMinutes()
      : `0${new Date(date).getMinutes()}`;
  const hours =
    new Date(date).getHours() > 9
      ? new Date(date).getHours()
      : `0${new Date(date).getHours()}`;

  return { seconds, minutes, hours };
};
