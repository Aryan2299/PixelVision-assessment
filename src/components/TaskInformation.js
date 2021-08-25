import React from "react";
import { v4 as uuidv4 } from "uuid";

const TaskInformation = (props) => {
  return (
    <ul>
      {props.taskInfo.map((item) =>
        item.length ? (
          <li key={uuidv4()}>
            {item[0]}: v{item[1]}
          </li>
        ) : null
      )}
    </ul>
  );
};

export default TaskInformation;
