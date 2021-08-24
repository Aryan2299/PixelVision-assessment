import React from "react";
import { constants } from "../utils/static/constants";

const CalenderWidget = () => {
  const [inputDate, setInputDate] = React.useState();
  const [dayOfWeek, setDayOfWeek] = React.useState();

  const getDayOfWeek = () => {
    const day = new Date(inputDate);
    const dayOfWeekIndex = new Date(inputDate).getDay();

    if (isNaN(dayOfWeekIndex)) {
      setDayOfWeek("Invalid date");
    } else {
      setDayOfWeek(constants.daysOfWeek[dayOfWeekIndex]);
    }
  };
  return (
    <div>
      <input type="text" onChange={(e) => setInputDate(e.target.value)} />
      <p>yyyy-mm-dd</p>
      <button type="button" onClick={getDayOfWeek}>
        Find out
      </button>
      {dayOfWeek}
    </div>
  );
};

export default CalenderWidget;
