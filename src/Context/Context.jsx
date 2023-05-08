import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const notesContext = createContext();

function Context(props) {
  const [notes, setNotes] = useState([]);

  const time = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return timeString;
  };
  const curentDate = () => {
    const now = new Date();
    const dateString = now.toLocaleDateString();

    return dateString;
  };

  const fetchData = () => {
    axios
      .get("https://6457fec10c15cb148215edda.mockapi.io/Notes")
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const createEmptyRecords = () => {
    const emptyNote = {
      Time: time(),
      Date: curentDate(),
      Title: "",
      Text: "",
    };
    axios
      .post("https://6457fec10c15cb148215edda.mockapi.io/Notes", emptyNote)
      .then((response) => {
        console.log("Empty record created:", response.data);
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteNotes = (id) => {
    axios
      .delete(`https://6457fec10c15cb148215edda.mockapi.io/Notes/${id}`)
      .then(() => {
        console.log(`Record with id ${id} has been deleted.`);
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateNotes = (id, data) => {
    axios
      .put(
        `https://6457fec10c15cb148215edda.mockapi.io/Notes/${id}`,
        data
      )
      .then(() => {
        console.log(`Record with id ${id} has been updated.`);
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const value = {
    notes,
    createEmptyRecords,
    deleteNotes,
    curentDate,
    updateNotes
  };
  return (
    <notesContext.Provider value={value}>
      {props.children}
    </notesContext.Provider>
  );
}

export default Context;
