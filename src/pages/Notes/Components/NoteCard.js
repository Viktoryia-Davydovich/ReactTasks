import React from "react";

const NoteCard = props => {
  const { title, note, tag, updDate, editNote, deleteNote } = props;

  return (
    <div className="note-card-container">
      <div className="note-card-title">{title}</div>
      <div className="note-card-content">{note}</div>
      <div className="note-card-tags">{tag}</div>
      <div className="note-card-tags">{updDate}</div>
      <span className="note-card-delete" onClick={deleteNote}>
        <i className="material-icons">close</i>
      </span>
      <span className="note-card-edit" onClick={editNote}>
        <i className="material-icons">mode_edit</i>
      </span>
    </div>
  );
};
export default NoteCard;
