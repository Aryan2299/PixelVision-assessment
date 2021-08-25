import React from "react";
import { v4 as uuidv4 } from "uuid";

const TaskOutput = (props) => {
  return (
    <ul>
      {props.taskOutput.map((item) => {
        return <li key={uuidv4()}>{item}</li>;
      })}
    </ul>
  );
};

export default TaskOutput;
