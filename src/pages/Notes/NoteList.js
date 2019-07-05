import React from "react";
import NoteCard from "./NoteCard";

const NoteList = props => {
  const cards = props.notes.map(note => {
    return (
      <NoteCard
        key={note._id}
        title={note.title}
        content={note.content}
        updDate={`${new Date(note.updatedDate)
          .toISOString()
          .slice(0, 10)} ${new Date(note.updatedDate)
          .toISOString()
          .slice(11, 16)}`}
        tag={note.tag}
        editNote={() => props.onOpenEditNoteModal(note._id)}
        deleteNote={() => props.onDeleteNote(note._id)}
        setPrivacy={() => props.onChangePrivacy(note.tag)}
      />
    );
  });
  return <div>{cards}</div>;
};

export default NoteList;
