import React from "react";
import { Redirect } from "react-router";
import { UserContext } from "../UserContext";
import { constants } from "../utils/static/constants";

const Dashboard = () => {
  const userContext = React.useContext(UserContext);

  const [uuidGenerated, setUuidGenerated] = React.useState();

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
        // setUuidGenerated(res.data.uuid);
        console.log(res);
      })
      .catch((err) => console.error("Error: Couldn't schedule task", err));
  };

  return (
    <div>
      <h1>Welcome, {userContext.name}</h1>
      <input
        type="file"
        id="images-file"
        onChange={(e) => {
          uploadFile(e.target.files[0]);
          console.log("files: ", e.target.files[0]);
        }}
      />
    </div>
  );
};

export default Dashboard;
