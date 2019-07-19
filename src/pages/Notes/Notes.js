import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Modal from "react-modal";

import NotesStyles from "./styles";
import AddNoteModal from "./NoteAdd";
import EditNoteModal from "./NoteEdit";
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
    setEditModalOpen,
    setSelectedEditModalOpen
  } = useNotes();

  if (isAuthenticated) {
    return (
      <div>
        <AddNoteModal
          isOpen={isAddModalOpen}
          onRequestClose={setAddModalOpen}
          user={user.email}
          onSaveNote={addNote}
          onCloseModal={setAddModalOpen}
        />
        <Modal isOpen={isEditModalOpen} onRequestClose={setEditModalOpen}>
          <EditNoteModal
            onSaveNote={editNote}
            onCloseModal={setEditModalOpen}
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
