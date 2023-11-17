import React from "react";
import { Card } from "./Card";

const ListNotes = ({ dataNotes }) => {
  return (
    <div className="list-wrapper">
      {/* Active Notes (archive) */}
      <h1 className="title-list">Active Notes</h1>
      <div className="gd-notes">
        {dataNotes !== null || dataNotes !== "" ? (
          <>
            {dataNotes.map((note) => (
              <>
                <Card note={note} key={note.id} />
              </>
            ))}
          </>
        ) : (
          <>
            <p>Empty Notes</p>
          </>
        )}
      </div>

      {/* Archives Notes */}
    </div>
  );
};

export default ListNotes;
