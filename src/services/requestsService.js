import axios from "axios";
import { constants } from "../utils/static/constants";

const { baseUrl } = constants;

export const getUuid = async (formData, setTaskInfo, setTaskOutput) => {
  try {
    let response = await axios.post(`${baseUrl}/task/new`, formData);

    if (response) {
      getTaskInfo(response.data.uuid, setTaskInfo, setTaskOutput);
    }
  } catch (err) {
    console.error("Error: Couldn't schedule task ", err);
  }
};

const getTaskInfo = async (uuid, setTaskInfo, setTaskOutput) => {
  try {
    let response = await axios.get(`${baseUrl}/task/${uuid}/info`);
    if (response) {
      const exposedObject = extractValuesFromObject(response);
      setTaskInfo(exposedObject);
      setTimeout(() => {
        getTaskOutput(uuid, setTaskOutput);
      }, 2000);
    }
  } catch (err) {
    console.error("Error: Couldn't fetch task info", err);
  }
};

const getTaskOutput = async (uuid, setTaskOutput) => {
  try {
    let response = await axios.get(`${baseUrl}/task/${uuid}/output`);
    if (response) {
      setTaskOutput(response.data);
    }
  } catch (err) {
    console.error("Error: Coudln't fetch task output ", err);
  }
};

const extractValuesFromObject = (object) => {
  return Object.keys(object).map((item) => {
    if (typeof object[item] === "object") {
      return extractValuesFromObject(object[item]);
    }
    return [item, object[item]];
  });
};

export const uploadFile = (file, setTaskInfo, setTaskOutput) => {
  const formData = new FormData();
  formData.append("images", file);
  getUuid(formData, setTaskInfo, setTaskOutput);
};
