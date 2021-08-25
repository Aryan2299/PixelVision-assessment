import React from "react";
import { getDayOfWeek } from "../services/calenderService";
import {
  buttonStyle,
  divStyle,
  resultHeadingStyle,
} from "../styles/calenderWidgetStyle";

const CalenderWidget = () => {
  const [inputDate, setInputDate] = React.useState("");
  const [dayOfWeek, setDayOfWeek] = React.useState("");

  return (
    <div style={divStyle}>
      <h4>Calender Widget</h4>
      <input
        type="text"
        onChange={(e) => setInputDate(e.target.value)}
        placeholder="yyyy-mm-dd"
        style={{ width: "20%" }}
      />

      <button
        type="button"
        style={buttonStyle}
        onClick={() => getDayOfWeek(inputDate, setDayOfWeek)}
      >
        Find out
      </button>
      <h3
        style={
          !dayOfWeek
            ? resultHeadingStyle
            : {
                ...resultHeadingStyle,
                padding: "10px 15px",
                backgroundColor: "#212121",
              }
        }
      >
        {dayOfWeek}
      </h3>
    </div>
  );
};

export default CalenderWidget;
