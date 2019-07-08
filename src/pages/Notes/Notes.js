import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import NotesStyles from "./styles";
import NoteAdd from "./NoteAdd";
import NoteEdit from "./NoteEdit";
import NoteList from "./NoteList";
import { NoteService } from "../../store/actions/NoteService";
import { setTab } from "../../store/actions/types";

const NoteManager = props => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isAddNoteModalOpen, setAddNoteModalOpen] = useState(false);
  const [isEditNoteModalOpen, setEditNoteModalOpen] = useState(false);

  const { isAuthenticated } = props.auth;
  const { user } = props.auth;

  useEffect(() => {
    props.setTab({ tab: 2 });

    NoteService.listNotes()
      .then(notes => {
        setNotes(notes);
        return;
      })
      .catch(error => {
        console.log(error);
        return;
      });
  }, [props]);

  const handleDeleteNote = noteId => {
    const confirmation = window.confirm(
      "Are you sure you wish to remove note?"
    );

    if (confirmation) {
      NoteService.removeNote(noteId)
        .then(() => {
          NoteService.listNotes()
            .then(notes => {
              setNotes(notes);
              return;
            })
            .catch(error => {
              console.log(error);
              return;
            });
        })
        .catch(error => {
          console.log(error);
          return;
        });
    }
  };

  const handleAddNote = note => {
    setAddNoteModalOpen(false);

    const { title, content, tag, user } = note;
    NoteService.addNote(title, content, tag, user)
      .then(newNote => {
        NoteService.listNotes()
          .then(notes => {
            notes.forEach(n =>
              n._id === newNote._id ? (n.isNew = "true") : (n.isNew = undefined)
            );
            setNotes(notes);
          })
          .catch(error => console.log(error));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleOpenAddNoteModal = () => {
    setAddNoteModalOpen(true);
  };

  const handleCloseAddNoteModal = () => {
    setAddNoteModalOpen(false);
  };

  const handleEditNote = note => {
    setEditNoteModalOpen(false);

    NoteService.updateNote(note)
      .then(() => {
        NoteService.listNotes()
          .then(notes => {
            notes.forEach(n =>
              n.id === note.id ? (n.isNew = "true") : (n.isNew = undefined)
            );
            setNotes(notes);
          })
          .catch(error => console.log(error));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleOpenEditNoteModal = noteId => {
    if (!noteId || noteId < 1) {
      throw Error("Cannot edit note. Invalid note id specified.");
    }

    NoteService.findNote(noteId)
      .then(note => {
        setSelectedNote(note);
        setEditNoteModalOpen(true);
        return;
      })
      .catch(error => {
        console.log(error);
        return;
      });
  };

  const handleCloseEditNoteModal = () => {
    setEditNoteModalOpen(false);
  };

  if (isAuthenticated) {
    return (
      <div>
        <Modal
          isOpen={isAddNoteModalOpen}
          onRequestClose={handleCloseAddNoteModal}
        >
          <NoteAdd
            user={user.email}
            onSaveNote={handleAddNote}
            onCloseModal={handleCloseAddNoteModal}
          />
        </Modal>
        <Modal
          isOpen={isEditNoteModalOpen}
          onRequestClose={handleCloseEditNoteModal}
        >
          <NoteEdit
            onSaveNote={handleEditNote}
            onCloseModal={handleCloseEditNoteModal}
            note={selectedNote}
          />
        </Modal>
        <div className={props.classes.addBtnStyle}>
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleOpenAddNoteModal}
          >
            Add note
          </button>
        </div>
        <NoteList
          isAuthenticated={isAuthenticated}
          user={user.email}
          notes={notes}
          onDeleteNote={handleDeleteNote}
          onOpenEditNoteModal={handleOpenEditNoteModal}
          onSaveNote={handleEditNote}
        />
      </div>
    );
  } else {
    return (
      <NoteList
        notes={notes}
        onDeleteNote={handleDeleteNote}
        onOpenEditNoteModal={handleOpenEditNoteModal}
        onSaveNote={handleEditNote}
      />
    );
  }
};

const mapStateToProps = state => ({
  tab: state.tab,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  setTab: data => dispatch(setTab(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(NotesStyles)(NoteManager));
