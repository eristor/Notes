import React, { useContext, useState } from "react";
import "./Sidebar.scss";
import NoteBlock from "./NoteBlock/NoteBlock";
import Workspace from "./Workspace/Workspace";
import { notesContext } from "../../Context/Context";

function Sidebar({active, setActive}) {
  const data = useContext(notesContext);
  console.log(data.notes);
  const notes = data.notes;
  return (
    <div
      className="Sidebar"

    >
      <div className="Sidebar-noteList">
        {notes ? (
          notes.map((data) => (
            <NoteBlock
              key={data.id}
              active={active}
              data={data}
              setActive={setActive}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <div className="Sidebar-workspace">
        <Workspace />
      </div>
    </div>
  );
}

export default Sidebar;
