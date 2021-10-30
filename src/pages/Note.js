import { useState, useEffect, useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';

import { NoteContainer, NoteHeader } from './NotesStyles';

const Note = ({ match, history }) => {
  const { note, setNote } = useContext(NotesContext);
  let noteID = match.params.id;

  const createNote = async () => {
    await fetch(
      `https://notes-app-d2000-default-rtdb.firebaseio.com/notes.json`,
      {
        method: 'POST',
        body: JSON.stringify({ ...note, updated: new Date() }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };

  const updateNote = async () => {
    await fetch(
      `https://notes-app-d2000-default-rtdb.firebaseio.com/notes/${noteID}.json`,
      {
        method: 'PUT',
        body: JSON.stringify({ ...note, updated: new Date() }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };

  const deleteNote = async () => {
    await fetch(
      `https://notes-app-d2000-default-rtdb.firebaseio.com/notes/${noteID}.json`,
      {
        method: 'DELETE',
        body: JSON.stringify(note),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    history.push('/');
  };

  const changeValueHandler = e => {
    setNote({ ...note, body: e.target.value });
  };

  const submitHandler = () => {
    if (noteID !== 'new' && !note.body) {
      deleteNote();
    } else if (noteID !== 'new') {
      updateNote();
    } else if (noteID === 'new' && note !== null) {
      createNote();
    }

    history.push('/');
  };

  return (
    <NoteContainer>
      <NoteHeader>
        <h3>
          <Link to="/">
            <ArrowLeft onClick={submitHandler} />
          </Link>
        </h3>

        {noteID !== 'new' ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={submitHandler}>Done</button>
        )}
      </NoteHeader>
      <textarea onChange={changeValueHandler} value={note?.body}></textarea>{' '}
      {/* Show if  exist the element note */}
    </NoteContainer>
  );
};

export default Note;
