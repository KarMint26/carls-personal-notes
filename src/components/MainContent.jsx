import React, { useEffect, useState } from "react";
import HeadMain from "./HeadMain";
import ListNotes from "./ListNotes";
import { getNotes } from "../context/NotesContext";
import ButtonAdd from "./ButtonAdd";
import FormAddNotes from "./FormAddNotes";

const MainContent = () => {
  const { finalData, handleAddNotes, successAdd } = getNotes();
  const [showModalForm, setShowModalForm] = useState(false);

  const handleAdd = () => {
    setShowModalForm(true);
  };

  const handleModal = () => {
    setShowModalForm(false);
  };

  return (
    <div className="container pt_normal">
      <HeadMain
        headText={"Notes By Title"}
        placeholderSearch={"Search for Notes"}
      />
      <ListNotes dataNotes={finalData} />
      {!showModalForm ? (
        <ButtonAdd handleAdd={handleAdd} />
      ) : (
        <FormAddNotes
          handleModal={handleModal}
          handleAddNotes={handleAddNotes}
        />
      )}
    </div>
  );
};

export default MainContent;
