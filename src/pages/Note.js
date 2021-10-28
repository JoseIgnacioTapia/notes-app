import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import notes from '../assets/data';

import { NoteContainer, NoteHeader } from './NotesStyles';

const Note = ({ match }) => {
  let noteID = match.params.id;

  const [note, setNote] = useState(null);

  useEffect(() => {
    const getNote = async () => {
      const response = await fetch(`http://localhost:5000/notes/${noteID}`);
      const data = await response.json();

      setNote(data);
    };

    getNote();
  }, [noteID]);

  return (
    <NoteContainer>
      <NoteHeader>
        <h3>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </h3>
      </NoteHeader>
      <textarea value={note?.body}></textarea>{' '}
      {/* Show if  exist the element note */}
    </NoteContainer>
  );
};

export default Note;
