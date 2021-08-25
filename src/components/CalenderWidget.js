import React from "react";
import { getDayOfWeek } from "../services/calenderService";

const CalenderWidget = () => {
  const [inputDate, setInputDate] = React.useState("");
  const [dayOfWeek, setDayOfWeek] = React.useState();

  return (
    <div>
      <input type="text" onChange={(e) => setInputDate(e.target.value)} />
      <p>yyyy-mm-dd</p>
      <button
        type="button"
        onClick={() => getDayOfWeek(inputDate, setDayOfWeek)}
      >
        Find out
      </button>
      <span>{dayOfWeek}</span>
    </div>
  );
};

export default CalenderWidget;
