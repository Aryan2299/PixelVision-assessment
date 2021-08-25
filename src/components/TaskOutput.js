import React from "react";
import { v4 as uuidv4 } from "uuid";
import { divStyle } from "../services/terminalDivStyle";

const TaskOutput = (props) => {
  React.useEffect(() => window.scrollBy(0, 500), []);
  return (
    <ul style={divStyle}>
      {props.taskOutput.map((item) => {
        return <li key={uuidv4()}>{item}</li>;
      })}
    </ul>
  );
};

export default TaskOutput;
