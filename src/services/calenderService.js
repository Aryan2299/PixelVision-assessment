import { constants } from "../utils/static/constants";

const { daysOfWeek } = constants;

export const getDayOfWeek = (inputDate, setDayOfWeek) => {
  const dayOfWeekIndex = new Date(inputDate).getDay();

  if (inputDate.length === 10 && !isNaN(dayOfWeekIndex)) {
    setDayOfWeek(daysOfWeek[dayOfWeekIndex]);
  } else {
    setDayOfWeek("Invalid date");
  }
};
