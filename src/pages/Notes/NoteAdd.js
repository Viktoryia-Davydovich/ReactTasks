import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const AddNoteForm = props => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState(false);

  const handleTitleChange = useCallback(event => {
    setTitle(event.target.value.trim());
  }, []);

  const handleContentChange = useCallback(event => {
    setContent(event.target.value.trim());
  }, []);

  const handleTagChange = useCallback(event => {
    setTag(event.target.checked);
  }, []);

  const onSave = event => {
    event.preventDefault();
    props.onSaveNote({
      title: title,
      content: content,
      tag: tag,
      user: props.user
    });
  };

  return (
    <div className="card card-body">
      <div className="mb-2">
        <span className="h4 my-auto">
          <i className="fa fa-file-text-o fa-lg"></i> New Note
        </span>
        <button className="float-right ml-auto" onClick={props.onCloseModal}>
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
            onChange={handleTitleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            className="form-control"
            name="content"
            rows="3"
            onChange={handleContentChange}
          ></textarea>
        </div>
        <div className="form-group">
          <FormControlLabel
            control={
              <Checkbox
                checked={tag}
                onChange={handleTagChange}
                value="private"
              />
            }
            label="Private"
          />
        </div>
        <div className="form-group row">
          <div className="col-sm-4 col-md-3 col-xl-2 ml-auto">
            <button type="submit" className="btn btn-success btn-lg btn-block">
              <i className="fa fa-save mr-2"></i>Save
            </button>
          </div>
          <div className="col-sm-4 col-md-3 col-xl-2">
            <button
              className="btn btn-danger btn-lg btn-block mt-2 mt-sm-0"
              onClick={props.onCloseModal}
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

AddNoteForm.propTypes = {
  onCloseModal: PropTypes.func,
  onSaveNote: PropTypes.func
};

export default AddNoteForm;
