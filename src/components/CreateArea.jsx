import React, { useState, useEffect, useReducer } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import useOnclickOutside from "react-cool-onclickoutside";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [isempty, setEmpty] = useState(true);
  const [isTouch, setTouch] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  useEffect(() => {
    setEmpty(false);
  }, []);
  const ref = useOnclickOutside(() => {
    if (isTouch) {
      setExpanded(false);
      setEmpty(false);
    }
  });

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "content") {
      setEmpty(false);
      setTouch(false);
      if (value === "") {
        setTouch(true);
      }
    }

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    if (!note.content) {
      setEmpty(true);
      return;
    }
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setTouch(true);
    event.preventDefault();
  }
  function expand() {
    setTouch(true);
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note" ref={ref}>
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>

        {isempty && isExpanded ? <p> Please enter a note </p> : null}
      </form>
    </div>
  );
}

export default CreateArea;
