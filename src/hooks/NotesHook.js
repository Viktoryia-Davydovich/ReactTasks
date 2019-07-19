import { useState, useEffect } from "react";
import { NoteService } from "../store/actions/NoteService";
import useToggle from "./ToggleHook";

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isAddModalOpen, setAddModalOpen] = useToggle(false);
  const [isEditModalOpen, setEditModalOpen] = useToggle(false);

  useEffect(() => {
    NoteService.listNotes()
      .then(notes => {
        setNotes(notes);
        return;
      })
      .catch(error => {
        console.log(error);
        return;
      });
  }, []);

  const deleteNote = noteId => {
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

  const addNote = note => {
    setAddModalOpen(false);
    const { title, content, tag, user } = note;
    NoteService.addNote(title, content, tag, user)
      .then(newNote => {
        NoteService.listNotes()
          .then(notes => {
            setNotes(notes);
          })
          .catch(error => console.log(error));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const editNote = note => {
    setEditModalOpen(false);

    NoteService.updateNote(note)
      .then(() => {
        NoteService.listNotes()
          .then(notes => {
            setNotes(notes);
          })
          .catch(error => console.log(error));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const setSelectedEditModalOpen = noteId => {
    NoteService.findNote(noteId)
      .then(note => {
        setSelectedNote(note);
        setEditModalOpen(true);
        return;
      })
      .catch(error => {
        console.log(error);
        return;
      });
  };

  return {
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
  };
};

export default useNotes;
