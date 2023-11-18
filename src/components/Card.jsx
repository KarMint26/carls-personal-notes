import React from "react";
import { showFormattedDate } from "../utils/data";
import { MdDeleteForever, MdArchive, MdUnarchive } from "react-icons/md";
import { getNotes } from "../context/NotesContext";

export const Card = ({ note, triggerHook }) => {
  const { deleteNotes, archiveNotes, unArchiveNotes } = getNotes();

  return (
    <React.Fragment key={note.id}>
      <div className="card-container">
        <div className="title-card">{note.title}</div>
        <div className="date">{showFormattedDate(note.createdAt)}</div>
        <div className="content-card">{note.body}</div>
        <div className="btn-card">
          <div className="delete" onClick={() => deleteNotes(note.id)}>
            <MdDeleteForever className="icon" />
            Delete
          </div>
          {!note.archived ? (
            <div className="archive" onClick={() => {
              archiveNotes(note.id);
              triggerHook();
            }}>
              <MdArchive className="icon" />
              Archive
            </div>
          ) : (
            <div className="archive" onClick={() => {
              unArchiveNotes(note.id);
              triggerHook();
            }}>
              <MdUnarchive className="icon" />
              Unarchive
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
