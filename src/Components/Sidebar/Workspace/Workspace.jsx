import React, { useEffect, useState } from "react";

import "./Workspace.scss";

function Workspace({note, update, info}) {

  const [newNote, setNewNote] = useState(note);
  const [timerId, setTimerId] = useState(null);

  const resetTimer = () => {
    if (timerId) {
      clearTimeout(timerId);
    }
    const newTimerId = setTimeout(() => {
      update(note.id, newNote);
    }, 1000);
    setTimerId(newTimerId);
  }

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    const newObject = { ...newNote, Title: newTitle };
    setNewNote(newObject);
    resetTimer();
  };
  const handleTextChange = (event) => {
    const newText = event.target.value;
    const newObject = { ...newNote, Text: newText };
    setNewNote(newObject);
    resetTimer();
  };

  useEffect(() => {
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [timerId]);


  return (
    <div className="Workspace">
        <span className="Workspace-time">{newNote.Date === info() ? newNote.Time : newNote.Date}</span>
      <div className="Workspace-textfields">
        <input placeholder="Type your title for this note please..." value={newNote.Title} onChange={(e) => handleTitleChange(e)}/>
        <textarea placeholder="Type your content for this note please..."  value={newNote.Text} onChange={(e) => handleTextChange(e)}/>
      </div>
    </div>
  );
}

export default Workspace;
