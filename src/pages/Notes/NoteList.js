import React from "react";
import NoteCard from "./NoteCard";
import { withStyles } from "@material-ui/core/styles";

import NotesStyles from "./styles";

const NoteList = props => {
  const {
    notes,
    onDeleteNote,
    onOpenEditNoteModal,
    onSaveNote,
    isAuthenticated,
    user
  } = props;
  const cards = notes.map(note => {
    return (
      <NoteCard
        key={note._id}
        id={note._id}
        title={note.title}
        content={note.content}
        createDate={DateFormat(note.createdDate)}
        updDate={DateFormat(note.updatedDate)}
        tag={note.tag}
        editNote={onOpenEditNoteModal}
        deleteNote={onDeleteNote}
        changePrivacy={onSaveNote}
        auth={isAuthenticated}
        user={user}
        noteAuthor={note.user}
      />
    );
  });
  return <div className={props.classes.cardListStyle}>{cards}</div>;
};

function DateFormat(date) {
  return `${new Date(date).toISOString().slice(0, 10)} ${new Date(date)
    .toISOString()
    .slice(11, 16)}`;
}

export default withStyles(NotesStyles)(NoteList);
