import { useState, useEffect } from 'react';
import { Link, history } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';

import { NoteContainer, NoteHeader } from './NotesStyles';

const Note = ({ match, history }) => {
  let noteID = match.params.id;

  const [note, setNote] = useState(null);

  useEffect(() => {
    const getNote = async () => {
      const response = await fetch(`http://localhost:5000/notes/${noteID}`);
      const data = await response.json();

      console.log(data);
      setNote(data);
    };

    getNote();
  }, [noteID]);

  const changeValueHandler = e => {
    setNote({ ...note, body: e.target.value });
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

  const submitHandler = () => {
    updateNote();
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
      </NoteHeader>
      <textarea onChange={changeValueHandler} value={note?.body}></textarea>{' '}
      {/* Show if  exist the element note */}
    </NoteContainer>
  );
};

export default Note;
