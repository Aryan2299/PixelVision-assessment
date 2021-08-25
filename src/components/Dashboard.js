import React from "react";
import { Redirect } from "react-router";
import { UserContext } from "../UserContext";
import { constants } from "../utils/static/constants";
import CalenderWidget from "./CalenderWidget";
import RunningTaskInfo from "./RunningTaskInfo";

const Dashboard = () => {
  const userContext = React.useContext(UserContext);

  const [uuidGenerated, setUuidGenerated] = React.useState();
  const [taskInfo, setTaskInfo] = React.useState({});
  const [taskOutput, setTaskOutput] = React.useState([]);
  const [redirect, setRedirect] = React.useState(false);

  const { baseUrl } = constants;

  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append("images", file);
    getUuid(formData);
  };

  const getUuid = (formData) => {
    fetch(`${baseUrl}/task/new`, {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        setUuidGenerated(res.uuid);
        console.log(res.uuid);
      })
      .catch((err) => console.error("Error: Couldn't schedule task ", err));
  };

  const extractValuesFromObject = (object) => {
    return Object.keys(object).map((item) => {
      if (typeof object[item] === "object") {
        return extractValuesFromObject(object[item]);
      } else {
        return [item, object[item]];
      }
    });
  };

  const getTaskInfo = new Promise((resolve, reject) => {
    fetch(`${baseUrl}/task/${uuidGenerated}/info`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const exposedObject = extractValuesFromObject(res);
        setTaskInfo(exposedObject);
        resolve(taskInfo);
      })
    //   .then(() => getTaskOutput())
      .then(() => setRedirect(true))
      .catch((err) => {
        console.error("Error: Couldn't fetch task info", err);
        reject(err);
      });
  });

  const getTaskOutput = new Promise((resolve, reject) =>
    fetch(`${baseUrl}/task/${uuidGenerated}/output`)
      .then((res) => res.json())
      .then((res) => {
        setTaskOutput(res);
        console.log("output: ", res);
        resolve(res);
      })
      .catch((err) => {
        console.error("Error: Coudln't fetch task output ", err);
        reject(err);
      })
  );

  React.useEffect(
    () =>
      Promise.all([getTaskInfo, getTaskOutput])
        .then((res) => console.log("res:", res))
        .catch((err) => console.error(err)),
    [uuidGenerated]
  );

  return (
    <div>
      <h1>Welcome, {userContext.name}</h1>
      <CalenderWidget />
      <input
        type="file"
        id="images-file"
        onChange={(e) => {
          uploadFile(e.target.files[0]);
        }}
      />
      <ul>
        {Array.isArray(taskInfo)
          ? taskInfo.map((item) => {
              return (
                <li>
                  {item[0]} {item[1]}
                </li>
              );
            })
          : null}
      </ul>
      <ul>
        {Array.isArray(taskOutput)
          ? taskOutput.map((item) => {
              return <li>{item}</li>;
            })
          : null}
      </ul>
    </div>
  );
};

export default Dashboard;
