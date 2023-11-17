import { createContext, useContext, useEffect, useState } from "react";
import { getInitialData } from "../utils/data";

const NotesContext = createContext();

export default function NotesProvider({ children }) {
  const [dataNotes, setDataNotes] = useState([]);
  const [notesByQuery, setNotesByQuery] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getAllNotes = () => {
      if (query !== "") {
        const notesCopy = [...dataNotes];
        setNotesByQuery(
          notesCopy.reduce((acc, note) => {
            if (note.title.toLowerCase().includes(query.toLowerCase())) {
              acc.push(note);
            }
            return acc;
          }, [])
        );
        return;
      }
      setDataNotes(getInitialData());
    };

    getAllNotes();
  }, [query]);

  useEffect(() => {
    if (query === "" || query === null) {
      setFinalData(dataNotes)
    } else {
      setFinalData(notesByQuery)
    }
  }, [dataNotes, notesByQuery]);

  const searchNotes = (q) => {
    setQuery(q);
  };

  return (
    <NotesContext.Provider value={{ finalData, searchNotes }}>
      {children}
    </NotesContext.Provider>
  );
}

export const getNotes = () => {
  return useContext(NotesContext);
};
