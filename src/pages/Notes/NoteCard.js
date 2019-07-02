import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const NoteCard = props => {
  const { title, note, updDate, tag, setPrivacy, editNote, deleteNote } = props;

  return (
    <div className="note-card-container">
      <div className="note-card-title">{title}</div>
      <div className="note-card-content">{note}</div>
      <div>
        <FormControlLabel
          control={
            <Checkbox checked={tag} onChange={setPrivacy} value="private" />
          }
          label="Private"
        />
      </div>
      <div className="align-middle">{updDate}</div>
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
