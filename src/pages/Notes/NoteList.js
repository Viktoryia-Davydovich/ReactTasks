import React from "react";
import NoteCard from "./NoteCard";

const NoteList = props => {
  const notes = props.notes;
  const cards = notes.map(note => {
    return (
      <NoteCard
        key={note.id}
        title={note.title}
        note={note.content}
        updDate={`${new Date(note.updatedDate)
          .toISOString()
          .slice(0, 10)} ${new Date(note.updatedDate)
          .toISOString()
          .slice(11, 16)}`}
        tag={note.tag}
        editNote={() => props.onOpenEditNoteModal(note.id)}
        deleteNote={() => props.onDeleteNote(note.id)}
        setPrivacy={() => props.onChangePrivacy(note.tag)}
      />
    );
  });
  return <div>{cards}</div>;
};

export default NoteList;
