import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const EditNoteForm = props => {
  const [title, setTitle] = useState(props.note.title);
  const [content, setContent] = useState(props.note.content);
  const [tag, setTag] = useState(props.note.tag);

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
      _id: props.note._id,
      title: title,
      content: content,
      tag: tag,
      updatedDate: Date.now()
    });
  };

  return (
    <div className="card card-body">
      <div className="mb-2">
        <span className="h4 my-auto">
          <i className="fa fa-file-text-o fa-lg"></i> Edit Note
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
            value={title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            className="form-control"
            name="content"
            rows="3"
            onChange={handleContentChange}
            value={content}
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
            <button type="submit" className="btn btn-success btn-block">
              <i className="fa fa-save mr-2"></i>Save
            </button>
          </div>
          <div className="col-sm-4 col-md-3 col-xl-2">
            <button
              className="btn btn-danger btn-block mt-2 mt-sm-0"
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

EditNoteForm.propTypes = {
  note: PropTypes.object,
  onCloseModal: PropTypes.func,
  onSaveNote: PropTypes.func
};

export default EditNoteForm;
