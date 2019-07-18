import React from "react";
import Modal from "react-modal";

import useForm from "../../hooks/NoteAddEditHook";

const AddNoteModal = props => {
  const [values, handleChange] = useForm();
  const { user, onSaveNote, onCloseModal, isOpen, onRequestClose } = props;

  const onSave = event => {
    event.preventDefault();
    onSaveNote({
      ...values,
      user: user
    });
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="card card-body">
        <div className="mb-2">
          <span className="h4 my-auto">
            <i className="fa fa-file-text-o fa-lg"></i> New Note
          </span>
          <button className="float-right ml-auto" onClick={onCloseModal}>
            X
          </button>
        </div>
        <form onSubmit={onSave} className="mt-2">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              autoFocus
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              className="form-control"
              name="content"
              rows="3"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="tag">Private </label>
            <input
              type="checkbox"
              name="tag"
              checked={values.tag}
              onChange={handleChange}
              value="private"
            ></input>
          </div>
          <div className="form-group row">
            <div className="col-sm-4 col-md-3 col-xl-2 ml-auto">
              <button
                type="submit"
                className="btn btn-success btn-lg btn-block"
              >
                <i className="fa fa-save mr-2"></i>Save
              </button>
            </div>
            <div className="col-sm-4 col-md-3 col-xl-2">
              <button
                className="btn btn-danger btn-lg btn-block mt-2 mt-sm-0"
                onClick={onCloseModal}
                type="button"
              >
                <i className="fa fa-remove mr-2"></i>Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddNoteModal;
