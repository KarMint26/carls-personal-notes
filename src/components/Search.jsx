import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getNotes } from "../context/NotesContext";

export default function Search({ searchIcon, placeholderSearch }) {
  const { searchNotes, query } = getNotes();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (query) {
      searchParams.set("q", query);
      setSearchParams(searchParams);
      navigate(`/search-notes?${searchParams.toString()}`, { replace: true });
    } else {
      searchParams.delete("q");
      setSearchParams(searchParams);
      navigate(`/`, { replace: true });
    }
  }, [query, searchParams, setSearchParams, navigate]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    searchNotes(value);
  };

  return (
    <div className="search-field">
      {searchIcon}
      <input
        type="text"
        name="search"
        id="search"
        className="search"
        placeholder={placeholderSearch}
        onChange={handleInputChange}
        autoComplete="off"
      />
    </div>
  );
}
