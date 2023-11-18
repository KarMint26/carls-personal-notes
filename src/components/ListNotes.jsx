import React, { useEffect, useState } from "react";
import { Card } from "./Card";

const ListNotes = ({ dataNotes }) => {
  const [activeNotes, setActiveNotes] = useState([])
  const [archivedNotes, setArchivedNotes] = useState([])
  const [triggerCount, setTriggerCount] = useState(0);

  useEffect(() => {
    setActiveNotes(dataNotes.filter((note) => !note.archived));
    setArchivedNotes(dataNotes.filter((note) => note.archived));

  }, [dataNotes, triggerCount])

  const handleTrigger = () => {
    setTriggerCount((prev) => prev += 1)
  }

  return (
    <div className="list-wrapper">
      {/* Active Notes */}
      <h1 className="title-list">Active Notes</h1>
      {activeNotes.length > 0 ? (
        <div className="gd-notes">
          {activeNotes.map((note) => (
            <div key={note.id}>
              <Card triggerHook={handleTrigger} note={note} key={note.id} />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-notes">Empty Notes</div>
      )}

      {/* Archive Notes */}
      <h1 className="title-archive">Archived Notes</h1>
      {archivedNotes.length > 0 ? (
        <div className="gd-notes">
          {archivedNotes.map((note) => (
            <div key={note.id}>
              <Card triggerHook={handleTrigger} note={note} key={note.id} />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-notes">Empty Notes</div>
      )}
    </div>
  );
};

export default ListNotes;
