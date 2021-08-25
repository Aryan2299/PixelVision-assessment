import React from "react";
import { UserContext } from "../UserContext";

import CalenderWidget from "./CalenderWidget";
import { uploadFile } from "../services/requestsService";
import TaskInformation from "./TaskInformation";
import TaskOutput from "./TaskOutput";

const Dashboard = () => {
  const userContext = React.useContext(UserContext);

  const [taskInfo, setTaskInfo] = React.useState({});
  const [taskOutput, setTaskOutput] = React.useState(null);

  return (
    <div>
      <h1>Welcome, {userContext.name}</h1>
      <CalenderWidget />
      <input
        type="file"
        id="images-file"
        onChange={(e) => {
          uploadFile(e.target.files[0], setTaskInfo, setTaskOutput);
        }}
      />
      <ul>
        {Array.isArray(taskInfo) ? (
          <TaskInformation taskInfo={taskInfo} />
        ) : null}
      </ul>
      <ul>
        {Array.isArray(taskOutput) ? (
          <TaskOutput taskOutput={taskOutput} />
        ) : null}
      </ul>
    </div>
  );
};

export default Dashboard;
