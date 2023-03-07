import React from "react";
import PlayButton from "./PlayButton";
import UploadButton from "./UploadButton";

function Toolbar() {
  return (
    <div>
      <PlayButton movieName="KiKi's Delivery Service" />
      <UploadButton />
    </div>
  );
}

export default Toolbar;
