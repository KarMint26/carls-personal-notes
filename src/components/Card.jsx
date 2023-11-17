import React from "react";
import { showFormattedDate } from "../utils/data";

export const Card = ({ note }) => {
  return (
    <React.Fragment key={note.id}>
      <div className="card-container">
        <div className="title-card">{note.title}</div>
        <div className="date">{showFormattedDate(note.createdAt)}</div>
        <div className="content-card">{note.body}</div>
        <div className="btn-card">
          <div className="delete">Delete</div>
          <div className="arsipkan">Arsipkan</div>
        </div>
      </div>
    </React.Fragment>
  );
};
