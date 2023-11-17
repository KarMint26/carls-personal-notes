import React from "react";
import HeadMain from "./HeadMain";
import ListNotes from "./ListNotes";
import { getNotes } from "../context/NotesContext";

const MainContent = () => {
  const { finalData } = getNotes();

  return (
    <div className="container pt_normal">
      <HeadMain
        headText={"Notes By Title"}
        placeholderSearch={"Search for Notes"}
      />
      <ListNotes dataNotes={finalData} />
    </div>
  );
};

export default MainContent;
