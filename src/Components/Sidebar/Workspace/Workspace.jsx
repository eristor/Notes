import React from "react";

import "./Workspace.scss";

function Workspace() {

    const time = new Date();
  return (
    <div className="Workspace">
        <span className="Workspace-time">{`${time.getHours()} : ${time.getMinutes()}`}</span>
      <div className="Workspace-textfields">
        <input placeholder="Type your title for this note please..." />
        <textarea placeholder="Type your content for this note please..." />
      </div>
    </div>
  );
}

export default Workspace;
