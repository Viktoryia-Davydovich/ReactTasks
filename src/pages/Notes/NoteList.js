import React from "react";
import NoteCard from "./NoteCard";
import { withStyles } from "@material-ui/core/styles";

import NotesStyles from "./styles";

const NoteList = props => {
  const cards = props.notes.map(note => {
    return (
      <NoteCard
        key={note._id}
        id={note._id}
        title={note.title}
        content={note.content}
        createDate={`${new Date(note.createdDate)
          .toISOString()
          .slice(0, 10)} ${new Date(note.createdDate)
          .toISOString()
          .slice(11, 16)}`}
        updDate={`${new Date(note.updatedDate)
          .toISOString()
          .slice(0, 10)} ${new Date(note.updatedDate)
          .toISOString()
          .slice(11, 16)}`}
        tag={note.tag}
        editNote={() => props.onOpenEditNoteModal(note._id)}
        deleteNote={() => props.onDeleteNote(note._id)}
        changePrivacy={props.onSaveNote}
        auth={props.isAuthenticated}
        user={props.user}
        noteAuthor={note.user}
      />
    );
  });
  return <div className={props.classes.cardListStyle}>{cards}</div>;
};

export default withStyles(NotesStyles)(NoteList);
