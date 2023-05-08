import React, { useEffect, useState } from "react";

import "./Workspace.scss";

function Workspace({note, update, info, readonly}) {

  const [newNote, setNewNote] = useState(note);
  const [timerId, setTimerId] = useState({});

  const triggerFunctionWithDelay  = (newObject) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    const newTimerId = setTimeout(() => {
      update(note.id, newObject);
    }, 700);
    setTimerId(newTimerId);
  }

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    const newObject = { ...newNote, Title: newTitle };
    setNewNote(newObject);
    triggerFunctionWithDelay(newObject);
  };
  const handleTextChange = (event) => {
    const newText = event.target.value;
    const newObject = { ...newNote, Text: newText };
    setNewNote(newObject);
    triggerFunctionWithDelay(newObject);
  };

  return (
    <div className="Workspace">
        <span className="Workspace-time">{newNote.Date === info() ? newNote.Time : newNote.Date}</span>
      <div className="Workspace-textfields">
        <input type= "text" placeholder="Напиши заголовок для цієї нотатки будь ласка..." readOnly= {readonly} value={newNote.Title} onChange={(e) => handleTitleChange(e)}/>
        <textarea type= "text" placeholder="Напиши текст для цієї нотатки будь ласка..." readOnly= {readonly}  value={newNote.Text} onChange={(e) => handleTextChange(e)}/>
      </div>
    </div>
  );
}

export default Workspace;
