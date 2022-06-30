import React from "react";

const Loader = () => (
  <div className="ui progress">
    <div className="bar">
      <div className="progress"></div>
    </div>
    <div className="label">Uploading Files</div>
  </div>
);

export default Loader;