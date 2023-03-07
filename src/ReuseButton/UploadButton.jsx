import React from "react";
import Button from "./Button.Component";

function UploadButton() {
  return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
}

export default UploadButton;
