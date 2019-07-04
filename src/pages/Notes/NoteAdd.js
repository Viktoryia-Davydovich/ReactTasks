import React, { Component } from "react";
import PropTypes from "prop-types";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

class AddNoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      tag: false
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onTagChange = this.onTagChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onTitleChange(event) {
    const title = event.target.value.trim();
    this.setState({ title: title });
  }

  onContentChange(event) {
    const content = event.target.value.trim();
    this.setState({ content: content });
  }

  onTagChange(event) {
    this.setState({ tag: event.target.checked });
  }

  onSave(event) {
    event.preventDefault();
    this.props.onSaveNote(this.state);
  }

  render() {
    return (
      <div className="card card-body">
        <div className="mb-2">
          <span className="h4 my-auto">
            <i className="fa fa-file-text-o fa-lg"></i> New Note
          </span>
          <a className="float-right ml-auto" onClick={this.props.onCloseModal}>
            <i className="fa fa-remove fa-2x mr-2 text-danger"></i>
          </a>
        </div>
        <form onSubmit={this.onSave} className="mt-2">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              autoFocus
              onChange={this.onTitleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              className="form-control"
              name="content"
              rows="3"
              onChange={this.onContentChange}
            ></textarea>
          </div>
          <div className="form-group">
            <FormControlLabel
              control={
                <Checkbox
                  checked={false}
                  onChange={this.onTagChange}
                  value="private"
                />
              }
              label="Private"
            />
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
                onClick={this.props.onCloseModal}
                type="button"
              >
                <i className="fa fa-remove mr-2"></i>Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

AddNoteForm.propTypes = {
  onCloseModal: PropTypes.func,
  onSaveNote: PropTypes.func
};

export default AddNoteForm;
