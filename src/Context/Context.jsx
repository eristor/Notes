import axios from "axios";
import React, { useState, createContext, useEffect } from "react";

export const notesContext = createContext();

function Context(props) {
  const [notes, setNotes] = useState([]);

  const fetchdata = () => {
    const url =
      "https://quintadb.com/apps/bOcCoTtt5cPOrzW5pcISkf/dtypes/entity/ddVCo-W7voijiLn2VcLfzd.json?rest_api_key=asW45uFCjnnirmWOFcI8o1&amp;view=";
    axios
      .get(url)
      .then((response) => {
        setNotes(response.data.records);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const deleteNotes = (activeId) => {
    notes.map((note) => {
      if (note.id === activeId) {
        const delurl = `https://quintadb.com/apps/bOcCoTtt5cPOrzW5pcISkf/dtypes/${activeId}.json?rest_api_key=asW45uFCjnnirmWOFcI8o1`;
        axios
          .delete(delurl)
          .then((response) => {
            console.log(response.data);
            console.log("Data deleted successfully.");
            setNotes(notes.filter((item) => item.id !== activeId))
          })
          .catch((error) => {
            console.log(error);
          });
      }
      return
    });

  };

  useEffect(() => {
    fetchdata();
  }, []);

  const value = {
    notes,
    deleteNotes,
  };
  return (
    <notesContext.Provider value={value}>
      {props.children}
    </notesContext.Provider>
  );
}

export default Context;
