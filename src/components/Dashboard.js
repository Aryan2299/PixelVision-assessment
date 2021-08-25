import React from "react";
import { UserContext } from "../UserContext";

import CalenderWidget from "./CalenderWidget";
import { uploadFile } from "../services/requestsService";
import TaskInformation from "./TaskInformation";
import TaskOutput from "./TaskOutput";
import {
  fileInputStyle,
  innerDivStyle,
  outerDivStyle,
} from "../services/userDashboardStyle";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const userContext = React.useContext(UserContext);

  const [taskInfo, setTaskInfo] = React.useState({});
  const [taskOutput, setTaskOutput] = React.useState(null);
  const [redirect, setRedirect] = React.useState(false);

  return !redirect ? (
    <UserContext.Consumer>
      {(value) => {
        console.log(value);
        setRedirect(value.user.email === null);
        return (
          <div style={outerDivStyle}>
            <CalenderWidget />

            <div style={innerDivStyle}>
              <h1
                style={{
                  textAlign: "center",
                  width: "100%",
                }}
              >
                Schedule Tasks
              </h1>
              <h4 style={{ margin: "0px 10px" }}>Upload image to continue</h4>
              <input
                type="file"
                id="images-file"
                style={fileInputStyle}
                onChange={(e) => {
                  uploadFile(e.target.files[0], setTaskInfo, setTaskOutput);
                }}
              />
              <ul>
                {Array.isArray(taskInfo) ? (
                  <div>
                    <h4>Task Details</h4>
                    <TaskInformation taskInfo={taskInfo} />
                  </div>
                ) : null}
              </ul>

              <ul>
                {Array.isArray(taskOutput) ? (
                  <div>
                    <h4>Task Output</h4>
                    <TaskOutput taskOutput={taskOutput} />
                  </div>
                ) : null}
              </ul>
            </div>
          </div>
        );
      }}
    </UserContext.Consumer>
  ) : (
    <Redirect to="/login" />
  );
};

export default Dashboard;
