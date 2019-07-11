import { useState, useEffect } from "react";
import { NoteService } from "../store/actions/NoteService";

const useLoadNotes = () => {
  const [notes, setNotes] = useState([]);

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

  return [notes, setNotes];
};

export default useLoadNotes;
