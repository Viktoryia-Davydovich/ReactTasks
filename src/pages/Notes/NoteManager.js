import React, { Component } from "react";
import Modal from "react-modal";

import NoteAdd from "./NoteAdd";
import NoteEdit from "./NoteEdit";
import NoteList from "./NoteList";

import { NoteService } from "../../store/actions/NoteService";

class NoteManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      selectedNote: null,
      isAddNoteModalOpen: false,
      isEditNoteModalOpen: false
    };

    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleEditNote = this.handleEditNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleChangePrivacy = this.handleChangePrivacy.bind(this);

    this.handleOpenAddNoteModal = this.handleOpenAddNoteModal.bind(this);
    this.handleCloseAddNoteModal = this.handleCloseAddNoteModal.bind(this);

    this.handleOpenEditNoteModal = this.handleOpenEditNoteModal.bind(this);
    this.handleCloseEditNoteModal = this.handleCloseEditNoteModal.bind(this);
  }

  componentDidMount() {
    this.listNotes();
  }

  listNotes() {
    NoteService.listNotes()
      .then(notes => {
        this.setState({ notes });
        return;
      })
      .catch(error => {
        console.log(error);
        return;
      });
  }

  handleDeleteNote(noteId) {
    if (noteId < 1) {
      throw Error("Cannot remove note. Invalid note id specified");
    }

    const confirmation = window.confirm(
      "Are you sure you wish to remove note?"
    );

    if (confirmation) {
      NoteService.removeNote(noteId)
        .then(() => {
          NoteService.listNotes()
            .then(notes => {
              this.setState({ notes });
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
  }

  handleAddNote(note) {
    this.setState({ isAddNoteModalOpen: false });

    const { title, content, tag } = note;

    NoteService.addNote(title, content, tag)
      .then(newNote => {
        NoteService.listNotes()
          .then(notes => {
            notes.forEach(n =>
              n.id === newNote.id ? (n.isNew = "true") : (n.isNew = undefined)
            );
            this.setState({ notes });
          })
          .catch(error => console.log(error));
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChangePrivacy(tag) {
    return !tag;
  }

  handleOpenAddNoteModal() {
    this.setState({ isAddNoteModalOpen: true });
  }

  handleCloseAddNoteModal() {
    this.setState({ isAddNoteModalOpen: false });
  }

  handleEditNote(note) {
    this.setState({ isEditNoteModalOpen: false });

    const { title, content, tag } = note;

    if (!title || title.length === 0) {
      throw Error("Title is required");
    }

    if (!content || content.length === 0) {
      throw Error("Content is required");
    }

    if (!Array.isArray(tag)) {
      throw Error("Tags must be an array");
    }

    NoteService.updateNote(note)
      .then(() => {
        NoteService.listNotes()
          .then(notes => {
            notes.forEach(n =>
              n.id === note.id ? (n.isNew = "true") : (n.isNew = undefined)
            );
            this.setState({ notes });
          })
          .catch(error => console.log(error));
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleOpenEditNoteModal(noteId) {
    if (!noteId || noteId < 1) {
      throw Error("Cannot edit note. Invalid note id specified.");
    }

    NoteService.findNote(noteId)
      .then(note => {
        this.setState({ selectedNote: note });
        this.setState({ isEditNoteModalOpen: true });
        return;
      })
      .catch(error => {
        console.log(error);
        return;
      });
  }

  handleCloseEditNoteModal() {
    this.setState({ isEditNoteModalOpen: false });
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.isAddNoteModalOpen}
          onRequestClose={this.handleCloseAddNoteModal}
        >
          <NoteAdd
            onSaveNote={this.handleAddNote}
            onCloseModal={this.handleCloseAddNoteModal}
          />
        </Modal>
        <Modal
          isOpen={this.state.isEditNoteModalOpen}
          onRequestClose={this.handleCloseEditNoteModal}
        >
          <NoteEdit
            onSaveNote={this.handleEditNote}
            onCloseModal={this.handleCloseEditNoteModal}
            note={this.state.selectedNote}
          />
        </Modal>
        <div className="mb-3">
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.handleOpenAddNoteModal}
          >
            <i className="fa fa-plus"></i>
          </button>
        </div>
        <NoteList
          notes={this.state.notes}
          onDeleteNote={this.handleDeleteNote}
          onOpenEditNoteModal={this.handleOpenEditNoteModal}
          onChangePrivacy={this.handleChangePrivacy}
        />
      </div>
    );
  }
}

export default NoteManager;
