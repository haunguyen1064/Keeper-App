import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {Route} from "react-router-dom"

const text = <>Some features of this app:
<ul>
  <li>Create new notes.</li>
  <li>Delete old notes.</li>
  <li>Text box expands/closes automatically when clicking inside/outside the box.</li>
  <li>Form validation, can't add an empty note.</li>
</ul></>

function App() {
  const [notes, setNotes] = useState([{
    title: "Welcome!",
    content: text
  }]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <Route path='/'>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </Route>
  );
}

export default App;
