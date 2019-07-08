import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import NotesStyles from "./styles";

const NoteCard = props => {
  const {
    id,
    title,
    content,
    createDate,
    updDate,
    editNote,
    deleteNote,
    changePrivacy,
    auth,
    user,
    noteAuthor,
    classes
  } = props;

  const [tag, setTag] = useState(props.tag);

  const handleChangeTag = event => {
    event.preventDefault();
    setTag(event.target.checked);
    changePrivacy({
      _id: id,
      title: title,
      content: content,
      tag: event.target.checked,
      updatedDate: Date.now()
    });
  };

  if (auth && user === noteAuthor) {
    return (
      <Card className={classes.cardStyle}>
        <CardContent>
          <Typography variant="h3" component="h2">
            {title}
          </Typography>
          <Typography>{content}</Typography>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={tag}
                  onChange={handleChangeTag}
                  value="private"
                />
              }
              label="Private"
            />
          </div>
          <div className="align-middle">Created: {createDate}</div>
          <div className="align-middle">Updated: {updDate}</div>
        </CardContent>
        <CardActions>
          <span>
            <Button variant="contained" color="primary" onClick={editNote}>
              Edit
              <CreateIcon />
            </Button>
          </span>
          <span>
            <Button variant="contained" color="secondary" onClick={deleteNote}>
              Delete
              <DeleteIcon />
            </Button>
          </span>
        </CardActions>
      </Card>
    );
  } else {
    if (!props.tag) {
      return (
        <Card className={classes.cardStyle}>
          <CardContent>
            <Typography variant="h3" component="h2">
              {title}
            </Typography>
            <Typography>{content}</Typography>
            <div className="align-middle">Created: {createDate}</div>
            <div className="align-middle">Updated: {updDate}</div>
          </CardContent>
        </Card>
      );
    } else return null;
  }
};

export default withStyles(NotesStyles)(NoteCard);
