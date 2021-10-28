import { useState, useEffect } from 'react';
import ListItem from '../components/ListItem';
import { NotesHeader, NotesList } from './NotesStyles.js';

const NotesPages = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const response = await fetch('http://localhost:5000/notes');
      const data = await response.json();

      console.log(data);
      setNotes(data);
    };

    getNotes();
  }, []);

  return (
    <div>
      <NotesHeader>
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </NotesHeader>

      <NotesList>
        {notes.map(note => (
          <ListItem key={note.id} note={note} />
        ))}
      </NotesList>
    </div>
  );
};

export default NotesPages;
