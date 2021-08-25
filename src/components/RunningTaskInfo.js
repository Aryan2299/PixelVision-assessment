import React from "react";
import { useParams } from "react-router";
import { constants } from "../utils/static/constants";

const RunningTaskInfo = (props) => {
  const extractValuesFromObject = (object) => {
    return Object.keys(object).map((item) => {
      if (typeof object[item] === "object") {
        extractValuesFromObject(object[item]);
      } else {
        console.log("task info: ", object[item]);
      }
    });
  };

  const Render = () => {
    return <ul>{() => extractValuesFromObject(props.taskInfo)}</ul>;
  };

  return <Render />;
};

export default RunningTaskInfo;
