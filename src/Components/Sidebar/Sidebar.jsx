import React, { useContext, useState } from "react";
import "./Sidebar.scss";
import NoteBlock from "./NoteBlock/NoteBlock";
import Workspace from "./Workspace/Workspace";
import { notesContext } from "../../Context/Context";

function Sidebar({ active, setActive }) {
  const data = useContext(notesContext);
  const notes = data.notes;
  const info = () => {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    return dateString;
  }

  return (
    <div className="Sidebar">
      <div className="Sidebar-noteList">
        {notes ? (
          notes.map((data) => (
            <NoteBlock
              key={data.id}
              active={active}
              data={data}
              setActive={setActive}
              curentDate = {data.curentDate}
              info = {info}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <div className="Sidebar-workspace">
        {notes ? notes.map((note) => {
          if (note.id === active.id) {
            return <Workspace note = {note} key = {note.id} update = {data.updateNotes} info = {info}/>;
          }
        }): <>1</>}
      </div>
    </div>
  );
}

export default Sidebar;
