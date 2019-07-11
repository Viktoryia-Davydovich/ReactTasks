import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import NotesStyles from "./styles";
import NoteAdd from "./NoteAdd";
import NoteEdit from "./NoteEdit";
import NoteList from "./NoteList";

import useNotes from "../../hooks/NotesHook";

const Notes = props => {
  const { isAuthenticated, user } = props.auth;

  const {
    notes,
    deleteNote,
    addNote,
    editNote,
    selectedNote,
    isAddModalOpen,
    setAddModalOpen,
    isEditModalOpen,
    setSelectedEditModalOpen
  } = useNotes();

  if (isAuthenticated) {
    return (
      <div>
        <Modal isOpen={isAddModalOpen} onRequestClose={setAddModalOpen}>
          <NoteAdd
            user={user.email}
            onSaveNote={addNote}
            onCloseModal={setAddModalOpen}
          />
        </Modal>
        <Modal
          isOpen={isEditModalOpen}
          onRequestClose={setSelectedEditModalOpen}
        >
          <NoteEdit
            onSaveNote={editNote}
            onCloseModal={setSelectedEditModalOpen}
            note={selectedNote}
          />
        </Modal>
        <div className={props.classes.addBtnStyle}>
          <button
            className="btn btn-primary"
            type="button"
            onClick={setAddModalOpen}
          >
            Add note
          </button>
        </div>
        <NoteList
          isAuthenticated={isAuthenticated}
          user={user.email}
          notes={notes}
          onDeleteNote={deleteNote}
          onOpenEditNoteModal={setSelectedEditModalOpen}
          onSaveNote={editNote}
        />
      </div>
    );
  } else {
    return (
      <NoteList
        notes={notes}
        onDeleteNote={deleteNote}
        onOpenEditNoteModal={setSelectedEditModalOpen}
        onSaveNote={editNote}
      />
    );
  }
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withStyles(NotesStyles)(Notes));
