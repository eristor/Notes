import React from "react";

import "./Sidebar.scss";
import NoteBlock from "./NoteBlock/NoteBlock";
import Workspace from "./Workspace/Workspace";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="Sidebar-noteList">
        <NoteBlock />
        <NoteBlock />
        <NoteBlock />
      </div>
      <div className="Sidebar-workspace">
        <Workspace />
      </div>
    </div>
  );
}

export default Sidebar;
