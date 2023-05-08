import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.scss";
import NoteBlock from "./NoteBlock/NoteBlock";
import Workspace from "./Workspace/Workspace";
import { notesContext } from "../../Context/Context";

function Sidebar({ active, setActive, readonly }) {
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
        {data.filteredArr ? (
          data.filteredArr.map((note) => (
            <NoteBlock
              key={note.id}
              active={active}
              data={note}
              setActive={setActive}
              curentDate = {note.curentDate}
              info = {info}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <div className="Sidebar-workspace">
        {data.filteredArr ? data.filteredArr.map((note) => {
          if (note.id === active.id) {
            return <Workspace note = {note} key = {note.id} update = {data.updateNotes} info = {info} readonly= {readonly}/>;
          }
        }): <></>}
      </div>
    </div>
  );
}

export default Sidebar;
