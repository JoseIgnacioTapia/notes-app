import { useState, useEffect, useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';

import { NoteContainer, NoteHeader } from './NotesStyles';

const Note = ({ match, history }) => {
  const { note, setNote, createNote, updateNote, deleteNote } =
    useContext(NotesContext);
  let noteID = match.params.id;

  const changeValueHandler = e => {
    setNote({ ...note, body: e.target.value });
  };

  const submitHandler = () => {
    if (noteID !== 'new' && !note.body) {
      deleteNote(noteID);
    } else if (noteID !== 'new') {
      updateNote(noteID);
    } else if (noteID === 'new' && note !== null) {
      createNote();
    }

    history.push('/');
  };

  const deleteHandler = () => {
    deleteNote(noteID);

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
          <button onClick={deleteHandler}>Delete</button>
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
