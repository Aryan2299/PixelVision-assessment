import React from "react";
import { Redirect } from "react-router";
import { UserContext } from "../UserContext";
import { constants } from "../utils/static/constants";

const Dashboard = () => {
  const userContext = React.useContext(UserContext);

  const [uuidGenerated, setUuidGenerated] = React.useState();
  const [fileUploaded, setFileUploaded] = React.useState(false);

  const { baseUrl } = constants;
  const formData = new FormData();

  const uploadFile = (file) => {
    formData.append("images", file);
    setFileUploaded(true);
  };

  const getUuid = () => {
    if (fileUploaded) {
      fetch(`${baseUrl}/task/new`, {
        method: "post",
        body: JSON.stringify({ zipUrl: "zipUrl", formData }),
      })
        .then((res) => res.json())
        .then((res) => {
          // setUuidGenerated(res.data.uuid);
          console.log(res);
        })
        .catch((err) => console.error("Error: Couldn't schedule task", err));
    }
  };

  return (
    <div>
      <h1>Welcome, {userContext.name}</h1>
      <input
        type="file"
        id="images-file"
        onChange={(e) => uploadFile(e.target.files[0])}
      />
      <button type="button" onClick={getUuid}>
        Submit
      </button>
    </div>
  );
};

export default Dashboard;
