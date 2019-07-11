import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import useForm from "../../hooks/NoteHook";

const EditNoteForm = props => {
  const { note, onSaveNote, onCloseModal } = props;
  const [values, handleChange] = useForm(note);

  const onSave = event => {
    event.preventDefault();
    onSaveNote({
      ...values,
      _id: note._id,
      updatedDate: Date.now()
    });
  };

  return (
    <div className="card card-body">
      <div className="mb-2">
        <span className="h4 my-auto">
          <i className="fa fa-file-text-o fa-lg"></i> Edit Note
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
            value={values.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            className="form-control"
            name="content"
            rows="3"
            onChange={handleChange}
            value={values.content}
          ></textarea>
        </div>
        <div className="form-group">
          <FormControlLabel
            control={
              <Checkbox
                checked={values.tag}
                onChange={handleChange}
                value="private"
              />
            }
            label="Private"
          />
        </div>
        <div className="form-group row">
          <div className="col-sm-4 col-md-3 col-xl-2 ml-auto">
            <button type="submit" className="btn btn-success btn-block">
              <i className="fa fa-save mr-2"></i>Save
            </button>
          </div>
          <div className="col-sm-4 col-md-3 col-xl-2">
            <button
              className="btn btn-danger btn-block mt-2 mt-sm-0"
              onClick={onCloseModal}
              type="button"
            >
              <i className="fa fa-remove mr-2"></i>Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

EditNoteForm.propTypes = {
  note: PropTypes.object,
  onCloseModal: PropTypes.func,
  onSaveNote: PropTypes.func
};

export default EditNoteForm;
