import React from "react";
import { getNotes } from "../context/NotesContext";

export default function Search({ searchIcon, placeholderSearch }) {
  const { searchNotes } = getNotes();

  return (
    <div className="search-field">
      {searchIcon}
      <input
        type="text"
        name="search"
        id="search"
        className="search"
        placeholder={placeholderSearch}
        onChange={({ target }) => searchNotes(target.value)}
      />
    </div>
  );
}
