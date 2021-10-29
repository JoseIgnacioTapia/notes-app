import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';

import { NoteContainer, NoteHeader } from './NotesStyles';

const Note = ({ match, history }) => {
  let noteID = match.params.id;

  const [note, setNote] = useState(null);

  useEffect(() => {
    const getNote = async () => {
      if (noteID === 'new') return;

      const response = await fetch(`http://localhost:5000/notes/${noteID}`);
      const data = await response.json();

      console.log(data);
      setNote(data);
    };

    getNote();
  }, [noteID]);

  const createNote = async () => {
    await fetch(`http://localhost:5000/notes/`, {
      method: 'POST',
      body: JSON.stringify({ ...note, updated: new Date() }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const updateNote = async () => {
    await fetch(`http://localhost:5000/notes/${noteID}`, {
      method: 'PUT',
      body: JSON.stringify({ ...note, updated: new Date() }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const deleteNote = async () => {
    await fetch(`http://localhost:5000/notes/${noteID}`, {
      method: 'DELETE',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json',
      },
    });

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
