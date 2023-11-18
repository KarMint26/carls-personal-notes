import { createContext, useContext, useEffect, useState } from "react";
import { getInitialData } from "../utils/data";

const NotesContext = createContext();

export default function NotesProvider({ children }) {
  const [dataNotes, setDataNotes] = useState(getInitialData());
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
    };

    getAllNotes();
  }, [query]);

  useEffect(() => {
    if (query === "" || query === null) {
      setFinalData(dataNotes);
    } else {
      setFinalData(notesByQuery);
    }
  }, [dataNotes, notesByQuery, query]);

  const searchNotes = (q) => {
    setQuery(q);
  };

  const deleteNotes = (id) => {
    setDataNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const archiveNotes = (id) => {
    const noteId = dataNotes.findIndex((note) => note.id === id);
    dataNotes[noteId].archived = true;
  };

  const unArchiveNotes = (id) => {
    const noteId = dataNotes.findIndex((note) => note.id === id);
    dataNotes[noteId].archived = false;
  };

  const handleAddNotes = (title, body) => {
    const newNotes = {
      id: Number(+new Date()),
      title: String(title),
      body: String(body),
      createdAt: new Date().toISOString(),
      archived: Boolean(false),
    };

    setDataNotes((prevData) => {
      return [...prevData, newNotes];
    });
  };

  return (
    <NotesContext.Provider
      value={{
        finalData,
        query,
        searchNotes,
        deleteNotes,
        archiveNotes,
        unArchiveNotes,
        handleAddNotes,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export const getNotes = () => {
  return useContext(NotesContext);
};
