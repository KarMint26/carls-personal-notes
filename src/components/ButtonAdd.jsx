import React from "react";
import { MdNoteAdd } from "react-icons/md";

export default function ButtonAdd({ handleAdd }) {
  return (
    <div className="add-container" onClick={handleAdd}>
      <MdNoteAdd className="add" />
    </div>
  );
}
