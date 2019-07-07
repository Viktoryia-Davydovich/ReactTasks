import * as axios from "axios";

const baseApiUrl = "https://glacial-ridge-25101.herokuapp.com/api/notes";

const addNote = (title, content, tag, user) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseApiUrl}/add`, {
        title: title,
        content: content,
        tag: tag,
        user: user
      })
      .then(result => {
        resolve(result.data);
      })
      .catch(error => {
        console.log(error);
        reject(error.message);
      });
  });
};

const listNotes = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseApiUrl}/`)
      .then(response => {
        resolve(response.data);
        return;
      })
      .catch(error => {
        reject(error.message);
        return;
      });
  });
};

const findNote = id => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseApiUrl}/${id}`)
      .then(response => {
        resolve(response.data);
        return;
      })
      .catch(error => {
        reject(error.message);
        return;
      });
  });
};

const removeNote = id => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${baseApiUrl}/${id}`)
      .then(() => {
        resolve();
        return;
      })
      .catch(error => {
        reject(error.message);
        return;
      });
  });
};

const updateNote = note => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${baseApiUrl}/`, { note })
      .then(() => {
        resolve();
        return;
      })
      .catch(error => {
        reject(error.message);
        return;
      });
  });
};

export const NoteService = {
  addNote: addNote,
  findNote: findNote,
  listNotes: listNotes,
  removeNote: removeNote,
  updateNote: updateNote
};
